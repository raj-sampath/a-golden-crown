const prompt = require("prompt");
const _ = require("lodash");

const messages = require("./messages");
const Kingdom = require("./kingdom").Kingdom;
const KingdomList = require("./kingdom").KingdomList;

const rulerName = "King Shan";
const numberOfKingdomsToBeRuler = 3;
const kingdoms = KingdomList;

var kingShanKingdoms = [];
var ruler;

mainPrompt();

function mainPrompt(){
    prompt.start();
    console.log(messages.MAIN_MESSAGE);
    prompt.get([{
        name: "option",
        required: true
    }],  
    (err, result) => {
        if(err)
            console.log(messages.GENERIC_ERROR);
        else{
            var option = parseInt(result.option);
            switch (option){
                case 1: {
                    if(ruler == undefined)
                        console.log(messages.NONE);
                    else
                        console.log(ruler);
                    
                    mainPrompt();
                    break;
                }

                case 2: {
                    if(kingShanKingdoms.length == 0)
                        console.log(messages.NONE);
                    else
                        console.log(getShanAllies());

                    mainPrompt();
                    break;
                }

                case 3: {
                    recieveMessagePrompt();
                    break;
                }

                case 0: {
                    console.log(messages.EXIT_MESSAGE);
                    break;
                }

                default: {
                    console.log(messages.ILLEGAL_OPERATION);
                    mainPrompt();
                }
            }
        }
    });
}

function recieveMessagePrompt(){
    prompt.start();
    prompt.get([{
            name: "message",
            required: true
        }], (err, result) => {
        if(err)
            console.log(messages.GENERIC_ERROR);
        else
            decodeMessage(result.message);
        mainPrompt();
    });
}

function decodeMessage(codedMessaage){
    if(isCodedMessageVaild(codedMessaage)){
        var messageParts = codedMessaage.split(",");
        var emblem = getEmblemFromCodedMessage(messageParts[0]);
        var message = getMessageFromCodedMessage(messageParts[1]);
        var messageArray = message.split("");

        if(isExistingAlly(emblem))
            console.log(messages.EXISTING_ALLY);
        else{
            var thisKingdom = getKingdomAssociatedToMessage(emblem);
            if(thisKingdom == null || thisKingdom == undefined){
                console.log(messages.INVALID_KINGDOM);
            }
            else{
                var animal = _.toLower(thisKingdom.animal);
                var animalArray = animal.split("");
            
                var numberOfLettersRemoved = 0;
                animalArray.forEach((letter) => {
                    var letterIndex = messageArray.indexOf(letter);
                    if(letterIndex >= 0){
                        var removedArray = messageArray.splice(letterIndex, 1);
                        if(removedArray.length > 0)
                            numberOfLettersRemoved ++ ;
                    }
                });
            
                if(numberOfLettersRemoved == animalArray.length){
                    console.log(messages.KINGDOM_ADDED);
                    kingShanKingdoms.push(thisKingdom);
                    if(kingShanKingdoms.length == numberOfKingdomsToBeRuler)
                        ruler = rulerName;
                }
                else
                    console.log(messages.KINGDOM_NOT_ADDED);
            }
        }        
    }
    else
        console.log(messages.ILLEGAL_MESSAGE);
}

function getKingdomAssociatedToMessage(emblem){
    return kingdoms.filter((k) => _.lowerCase(k.emblem) == _.lowerCase(emblem))[0];
}

function isCodedMessageVaild(message){
    var messageParts = message.split(",");
    if(messageParts.length == 2)
        return true;
    else
        return false;
}

function getMessageFromCodedMessage(message){
    return _.toLower(message);
}

function getEmblemFromCodedMessage(message){
    return _.replace(_.toLower(message), " ");
}

function isExistingAlly(emblem){
    var existingAllies = getShanAllies();
    if(existingAllies.indexOf(emblem) > -1)
        return true;
    else
        return false;
}

function getShanAllies(){
    return kingShanKingdoms.map((o) => o.emblem);
}
