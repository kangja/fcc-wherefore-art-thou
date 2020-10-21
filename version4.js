// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  const keys = Object.keys(source)
 
  return collection.filter(obj => {
    return keys.reduce((acc, key) => {
      if (obj[key] !== source[key]) {
        return false; //if they don't equal, then set our accumular as false. Otherwise return the value of the accumulator. 
      } 
      return acc;
    }, true); //reduce is a method of an array and it reduces to whatever we wanted it to be. We could reduce it to a number, boolean, array, object, or whatever we want. 

    //Reduce takes in parameters just like a function as the first argument and as second argument, you must set an initial value. 

    //first parameter is called the accumulator/acc and the second parameter is the argument that we are looping over. Accumulator is like a memory variable that it knows what it is as we progress in the loop of the keys arrays. It keeps track of what the value was. 
  });
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
