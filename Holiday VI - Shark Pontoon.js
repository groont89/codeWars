//Holiday VI - Shark Pontoon
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    let result;
    let dolphinSpeed;
    dolphin === true ? dolphinSpeed = 2 : dolphinSpeed = 1;
    ((pontoonDistance / youSpeed) < (sharkDistance / ((sharkSpeed) / dolphinSpeed))) ?
    result = "Alive!":
        result = "Shark Bait!";

    return result;
}
console.log(shark(24, 0, 4, 8, true));