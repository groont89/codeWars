//Regex validate PIN code
function validatePIN(pin) {
    if (pin.length != 4 && pin.length != 6) {
        return false;
    } else {
        if (!/^[0-9]+$/.test(pin)) {
            return false;
        } else {
            return true;
        }
    }
}
console.log(validatePIN("1230"));