// Export statement is an statement which is used to export module to the another module

// export keyword is used to export module to the another module
// There are two types to use export keyword

// First : write export keyword before variable or function
// export const add = (val1, val2) => {return val1 + val2};

// export const less = (val1, val2) => {return val1 - val2};

// Second : write variable or function in export keyword
const add = (val1, val2) => {return val1 + val2};

const less = (val1, val2) => {return val1 - val2};

export{add, less};

// This is also called named export.
