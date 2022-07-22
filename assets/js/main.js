
// link de la página de juegos: https://wordwall.net/es-ar/community/n%C3%BAmeros-romanos

/**
 * All posible Roman Integer Pairs
 * Una caracteristica de estos números es que se escirben del número mayor al menor
 * exceptuando algunos casos como: 4, 9, 40, 90, 400, 900
 */
const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
}

const convertToRoman = (num) => {
    let result = '';
    for (const key in map) {
        result += key.repeat(Math.floor(num / map[key]));
        num %= map[key];
        console.log(num);
    }
    return result;
}

// console.log(convertToRoman(9));
convertToRoman(9);