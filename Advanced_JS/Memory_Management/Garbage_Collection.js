//// Garbage Collection: In case of the low-level languages where the developer has to manually decide when the memory is no longer needed, high-level languages use an automated form of memory management known as Garbage Collection(GC). An object with zero references is considered to be garbage or “collectible”. 
/// In short, release of unused memory is Garbage Collection(GC);

/// Working of Garbage Collection

let x = {
    a: {
        b: 2,
    },
};
// 2 objects are created. One is referenced by the other as one of its properties.

console.log(x); // { a: { b: 2 } }

let y = x;
// The 'y' variable is the second thing that has a reference to the object.

console.log(y); // { a: { b: 2 } }

x = 1;
/* Now, the object that was originally in 'x' has a unique reference
embodied by the 'y' variable. */

console.log(x); // 1

let z = y.a;
/* Reference to 'a' property of the object.
This object now has 2 references: one as a property, 
the other has the z variable. */

console.log(z); // { b: 2 }

y = "mozilla";
/* The object that was originally in 'x' has now zero
references to it. It can be garbage-collected. */

console.log(y); // mozilla

z = null;
/* The 'a' property of the object originally in x
has zero references to it. It can be garbage collected. */

console.log(z); // null