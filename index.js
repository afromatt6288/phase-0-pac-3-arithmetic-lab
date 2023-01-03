function add(a, b, c = 0, d = 0, e = 0, f = 0) {
    return (a + b + c + d + e + f)
}
function subtract(a, b, c = 0, d = 0, e = 0, f = 0) {
    return (a - b - c - d - e - f)
}
function multiply(a, b, c = 1, d = 1, e = 1, f = 1) {
    return (a * b * c * d * e * f)
}
function divide(a, b, c = 1, d = 1, e = 1, f = 1) {
    return (a / b / c / d / e / f)
}
function increment(n) {
    return (n += 1)
}
function decrement(n) {
    return (n -+ 1)
}
function makeInt(n) {
    return (parseInt(`${n}`, 10))
}
function preserveDecimal(n) {
    return (parseFloat(`${n}`))
}