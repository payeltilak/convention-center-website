const names = ['puntu', 'suntu', 'muntu', 'guntu', 'pintu', 'puntu', 'muntu', 'guntu'];
function removeDuplicate(names) {
    const unique = [];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     // console.log(element);
    // }
    for (const element of names) {

        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }

}
const unique = removeDuplicate(names);
console.log(unique);