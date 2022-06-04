const greetings = 'Hello, how are you?';
function reverseString(text) {
    let reversed = '';
    for (const letter of text) {
        console.log(letter);
        reversed = reversed + letter;
    }
}
const reversed = reverseString(greetings);
console.log(reversed);