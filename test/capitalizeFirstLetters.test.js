const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

// Donner à la suite de test un libellé :
describe('capitalizeFirstLetters', () => {
    // Donner un libellé à chaque test :
    it('is a function accepting only one argument ', () =>{
        assert.strictEqual( typeof capitalizeFirstLetters, 'function');
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });

    it('transforms a sentence correctly', () => {
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
    });

    it('transforms a word correctly', () => {
assert.strictEqual(capitalizeFirstLetters('bonJour'), 'BonJour');
    });

    it('transforms a letter correctly', () => {
assert.strictEqual(capitalizeFirstLetters('s'), 'S');
    });

    it('works with a blank sentence', () => {
        // Et si il y a une chaine vide en argument :
assert.strictEqual(capitalizeFirstLetters(''),'');
    });
});