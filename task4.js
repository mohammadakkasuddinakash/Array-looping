const statement = 'I am a hard working person';
const words =statement.split(' ');
console.log(words)
const rev_words = [];
for(const word of words){
    rev_words.unshift(word);
}
console.log(rev_words);

// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

