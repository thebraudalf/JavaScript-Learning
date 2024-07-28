// Namespaces import allows us to import module from exported module into a single object

// use * to import all files from exported module
import * as Maths from "./Export.js";

console.log(Maths.add(5,3));
console.log(Maths.less(5,3));
console.log(Maths.mul(5,3));
console.log(Maths.div(5,3));
