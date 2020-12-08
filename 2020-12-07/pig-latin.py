def pig_latin(text):
 say = ""
 # Separate the text into words
 words = text.split()
 for word in words:
   count = 0
   string = ""
   # Create the pig latin word and add it to the list
   if word == words[count]:
     string += word[count]
     say = word[count+1:] + string + "ay"
     count += 1
   else:
     say += " " + word[count+1:] + word[0:1] + "ay"
     count += 1
   # Turn the list back into a phrase
 return say


print(pig_latin("hello how are you")) # Should be "ellohay owhay reaay ouyay"
print(pig_latin("programming in python is fun")) # Should be "rogrammingpay niay ythonpay siay unfay"