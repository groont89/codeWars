//Two fighters, one winner.
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;

}

function declareWinner(fighter1, fighter2, firstAttacker) {
    let a = [fighter1, fighter2].find((v) => v.name === firstAttacker);
    let b = [fighter1, fighter2].find((v) => v.name !== firstAttacker);

    return Math.ceil(b.health / a.damagePerAttack) <= Math.ceil(a.health / b.damagePerAttack) ? a.name : b.name;
}
console.log((declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")));