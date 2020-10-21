// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  const arr = [];

  const keys = Object.keys(source)//built in function
  // console.log(keys);
  // [ 'last' ]
  // [ 'apple', 'cookie' ]

// we have to loop through all of our keys to make sure it exists within the object. The value of it is the same as that of the source. 

  for (const obj of collection) { //each element is called object 
    let hasAllKeyValuePairs = true //need a boolean variable to keep track of whether current object in question is that we are looping over contains all the key value pairs within the source or not. 

    // we will initialize this as true and loop through all the keys and then do a check. 

    for (const key of keys) {
      if (obj[key] !== source[key]) {
        hasAllKeyValuePairs = false;
        break; //will break out of the for loop
      }
    }
  }
 
  return arr;
}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })
