# A Golden Cown
Solution for GeekTrust A Golden Crown on NodeJS

## Problem Statement
There is no ruler in the universe of Southeros and pandemonium reigns. Shan, the gorilla king of the Space kingdom
wants to rule all Six Kingdoms in the universe of Southeros. He needs the support of 3 more kingdoms to be the ruler.

Each kingdom has an animal emblem and Shan needs to send a message with the animal in the message to win them over. LAND emblem - Panda, WATER emblem - Octopus, ICE emblem - Mammoth, AIR emblem - Owl, FIRE emblem - Dragon.

Once he wins 3 more kingdoms, he is the ruler! The secret message needs to contain the letters of the animal in their emblem. For example, secret message to the Land kingdom (emblem: Panda) needs to have the letter 'p','n','d' at- least once and 'a' at-least twice. If he sends "a1d22n333a4444p" to the Land kingdom, he will win them over.

## Sample Input 1
Who is the ruler of Southeros? 
Ouput: None

Allies of Ruler?
Output: None

Input Messages to kingdoms from King Shan: Input: Air, “oaaawaala”
Input: Land, “a1d22n333a4444p”
Input: Ice, “zmzmzmzaztzozh”

Who is the ruler of Southeros? 
Output: King Shan

Allies of Ruler?
Output: Air, Land, Ice

## Sample Input 2
Who is the ruler of Southeros? 
Output: None

Allies of King Shan?
Output: None

Input Messages to kingdoms from King Shan: 
Input: Air, “Let’s swing the sword together”
Input: Land, “Die or play the tame of thrones”
Input: Ice, “Ahoy! Fight for me with men and money” Input: Water, “Summer is coming”
Input: Fire, “Drag on Martin!”

Who is the ruler of Southeros? 
Output: King Shan

Allies of King Shan?
Output: Air, Land, Ice, Fire

## Running the Game
1. Clone the Code
2. Open Terminal/Command Prompt and navigate to the the code folder.
3. npm install
4. node game.js
