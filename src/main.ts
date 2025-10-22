type coordinate = [number, number];
function distance(a: coordinate, b: coordinate): number {
  return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
}
console.log(distance([2, 3], [2, 4]));
