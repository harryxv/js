//Set object

//constructor API.
const collections = new Set()

//size property
collections.size         // 0

//add() API.

collections.add(5);           // Set(1) { 5 }
collections.add(5) ;          // Set(1) { 5 }
collections.add('some text'); // Set(2) { 5, 'some text' }

//clear API
collections.clear();

//add object to set. comparison is based on object-reference, not on value
const o = {a: 1, b: 2};
collections.add(o); //Set(1) { { a: 1, b: 2 } }
collections.add(o); //Set(1) { { a: 1, b: 2 } }
console.log(collections);

collections.add({a: 1, b: 2});   // Set(2) { { a: 1, b: 2 }, { a: 1, b: 2 } }
console.log(collections);
collections.add({a: 1, b: 2});   // o is referencing a different object, so this is okay
console.log(collections);
collections.add(o); //Set(4) { 1, 5, 'some text', { a: 1, b: 2 } }
console.log(collections);

//has() API
collections.has(1)   ;           // true
collections.has(3)   ;           // false, since 3 has not been added to the set
collections.has(5) ;             // true
collections.has(Math.sqrt(25)) ; // true
collections.has('Some Text'.toLowerCase()); // true
collections.has(o)  ;     // true


//delete API
collections.delete(5)    // removes 5 from the set
collections.has(5)       // false, 5 has been removed

collections.size         // 4, since we just removed one value

console.log(collections)
// logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
// logs Set(4) { 1, "some text", {…}, {…} } in Chrome