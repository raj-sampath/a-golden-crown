function Kingdom(emblem, animal){
    this.emblem = emblem;
    this.animal = animal;

    this.print = () => console.log("Emblem : " + this.emblem + " & Animal : " + this.animal);

    this.getEmblem = () => this.emblem;
    this.setEmblem = (emblem) => this.emblem = emblem;

    this.getAnimal = () => this.animal;
    this.setAnimal = (animal) => this.animal = animal;
}

function getKingdoms(){
    var kindomList = [];
    kindomList.push(new Kingdom("Air", "Owl"));
    kindomList.push(new Kingdom("Land", "Panda"));
    kindomList.push(new Kingdom("Fire", "Dragon"));
    kindomList.push(new Kingdom("Water", "Cctapus"));
    kindomList.push(new Kingdom("Space", "Gorilla"));
    kindomList.push(new Kingdom("Ice", "Mammoth"));
    return kindomList;
}

module.exports.Kingdom = Kingdom;
module.exports.KingdomList = getKingdoms();

