// Q 1. Count the occurrences.
// You are building a word count generator that will take a large string of text as input and output the words and
// the number of times they are present in the string. Your task is to write a function that can count the
// occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
// assume that the string only contains alphabetic characters and spaces.

let data = "Hello   there hii the there Hello hii hii";
let newdata = data.split(/\s+/);
let wordOccurence = new Map();

for (const word of newdata) {
    const trimmedWord = word.trim();
    if (trimmedWord !== '') {
        if (wordOccurence.has(trimmedWord)) {
            // If the word is already in the Map, increment the count
            wordOccurence.set(trimmedWord, wordOccurence.get(trimmedWord) + 1);
        } else {
            // If the word is not in the Map, add it with a count of 1
            wordOccurence.set(trimmedWord, 1);
        }
    }
}
console.log(wordOccurence);

