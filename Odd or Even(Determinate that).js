function oddOrEven(n) {
    let result = ((n * (n + 1)) / 2);
    if (String(result).length > 16) {
        result = (BigInt(n) * BigInt(n + 1)) / BigInt(2);
        if ((n % 2) != 0) {
            return "Either";
        } else {
            if ((result % BigInt(2)) == 0) {
                return "Even";
            } else {
                return "Odd";
            }
        }
    } else {
        if ((n % 2) != 0) {
            return "Either";
        } else {
            if (((result % 2)) == 0) {
                return "Even";
            } else {
                return "Odd";
            }
        }
    }

}
console.log(oddOrEven(266686138));