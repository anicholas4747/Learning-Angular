let msg = "abc";
// when you type "msg.", ts will suggest string methods

let thing;
thing = "hello";
// to get suggestions for type any, you need to assert the type 1 of 2 ways
let way1 = (<string>thing).toLowerCase();
let way2 = (thing as string).toUpperCase();