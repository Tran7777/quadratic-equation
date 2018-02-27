module.exports = function solveEquation(equation) {
  const ratioRegexp = /(\+?|\-?)\d+/g;
    const parsedEquation = equation.split(' ').join('').replace('*x^2', '').replace('*x', '');

    const a = +ratioRegexp.exec(parsedEquation)[0];
    const b = +ratioRegexp.exec(parsedEquation)[0];
    const c = +ratioRegexp.exec(parsedEquation)[0];

    const d = Math.pow(b, 2) - 4 * a * c;

    const xOne = Math.round((-b + Math.sqrt(d)) / (2 * a));
    const xTwo = Math.round((-b - Math.sqrt(d)) / (2 * a));

    return [xOne, xTwo].sort((left, right) => left - right);

}
