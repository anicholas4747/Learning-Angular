/*
let count = 5;
count = "blah"; // ts warns us that count was a num, shouldn't change to a str

let a; // ts assigns to type any, and any types are valid
a = 1
a = "str"
a = true
*/

// you can specify types when initializing variables in ts
let a: number;
let b: string;
let c: boolean;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1,"hi",false];

enum Thing { x = 0, y = 1, z = 2};
let xCoord = Thing.x; //=> 0