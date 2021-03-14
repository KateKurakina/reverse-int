module.exports = function reverse (n) {
    n = Math.abs(n);
    let rev = 0;
    let dig = 0;
    while (n !== 0)
    {
        dig = n % 10;
        rev = rev * 10 + dig;
        n = Math.floor(n / 10);
    }
    return rev;
}
