def uniqueMorseRepresentations(self, words: List[str]) -> int:
    lookup = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    # Type: set, tuple
    transformations = set()
    
    # print(range(len(words)))
    
    for i in range(len(words)):
        word = words[i]
        
        morseTransformation = ''
        
        for j in range(len(word)):
            
            letter = word[j]
            alphaIndex = alphabet.index(letter)
            
            morseValue = lookup[alphaIndex]
            
            morseTransformation += morseValue
    
        transformations.add(morseTransformation)

    
    return len(transformations)