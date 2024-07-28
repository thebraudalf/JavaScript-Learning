// Default Import: This type of import is used to import default value from a another module.

// There are two ways to use default import
// First way
// default keyword is used to import default module
// import {default as add} from "./defaultExport.js";

// Second way
import add from "./defaultExport.js";


console.log(add(3, 4));
