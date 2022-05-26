//Nickname Generator
function nicknameGenerator(name) {
    let vowels = "aeiou";
    if (name.length < 4) {
        return "Error: Name too short";
    } else {
        if (vowels.includes(name[2])) {
            return name.toLowerCase().slice(0, 1).toUpperCase() + name.slice(1, 4);
        } else {
            return name.toLowerCase().slice(0, 1).toUpperCase() + name.slice(1, 3);
        }
    }

}
console.log(nicknameGenerator("samantha"));