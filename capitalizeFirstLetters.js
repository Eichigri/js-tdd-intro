// On importe assert
const assert = require('assert');

// LA FONCTION :
function capitalizeFirstLetters(string){
    let output = '';
    let majuscule = true;
    for ( let i = 0; i < string.length; i++){
        if (string[i]==" "){
            majuscule = true;
            output += string[i];
        }
        else if (majuscule) {
            output += string[i].toUpperCase();
            majuscule = false;
        }
        else {
            output += string[i];
        }
    }
    return output;
};

// Les tests :
// capitalizeFirstLetters est une fonction :
assert.strictEqual( typeof capitalizeFirstLetters, 'function');

// Elle accepte qu'un argument :
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Elle transforme une lettre correctement :
assert.strictEqual(capitalizeFirstLetters('s'), 'S');

// Elle transforme un mot correctement :
assert.strictEqual(capitalizeFirstLetters('bonJour'), 'BonJour');

// Elle transforme une phrase avec plusieurs mots correctement :
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');

// Et si il y a une chaine vide en argument :
assert.strictEqual(capitalizeFirstLetters(''),'');