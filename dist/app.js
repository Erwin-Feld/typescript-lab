"use strict";
console.log("duderino");
// export {};
/*
We need to tell TypeScript that our file
is a module with its own scope.
TypeScript considers any file with
import or export statements as a module.
 */
let x = 12;
if (typeof x === "number") {
    x = 14;
}
console.log(x);
