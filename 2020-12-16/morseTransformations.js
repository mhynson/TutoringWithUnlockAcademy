/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    // Use this array as a lookup table or a map to find the morse code transformations.
    var lookup = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    // Use the alphabet as a way to find the index of a letter, to use later for the finding the morse code transformation.
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // An empty array to hold our transformations
    var transformations = [];
    
    // Loop through each of the words coming in
    for (var i=0; i<words.length; i++) {

        // Define a variable for the word
        var word = words[i];

        // Create an empty string for the transformation
        var morseTransformation = '';
        
        // Loop through each letter in the word
        for(var letterIndex=0; letterIndex<word.length; letterIndex++) {

            // Define a variable for each letter
            var letter = word[letterIndex]; // ex. "g"

            // Find the index in the alphabet for each letter
            var alphabetIndex = alphabet.indexOf(letter); // ex. 6

            // Get the Morse code value for the letter, using the index
            var morseValue = lookup[alphabetIndex];

            // Add the transformed letter to the transformed word.
            morseTransformation += morseValue; // "--."
        }
        
        // Next if the transform does not exists within the list, then add it.
        var transformExists = transformations.indexOf(morseTransformation) > -1;
        if (!transformExists) {
            transformations.push(morseTransformation);
        }
    }
    
    // Return the number of unique transformations.
    return transformations.length;
};