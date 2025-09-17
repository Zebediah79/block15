// Code taken from block 14 string to number conversion function and used
// for creating array of flavors to to loop through and create an object
// that adds a property if not available or increments a property if it
// already exists.

/**
 * @param {string} commaSeparatedFlavors
 * @returns {flavors} the string converted into an object of flavors
 */

function convertStringToFlavors(commaSeparatedFlavors) {
  const differentFlavors = commaSeparatedFlavors.split(","); // creates array of flavors from prompt
  const flavors = {}; //initialize object flavors with zero properties.

  for (let f in differentFlavors) {
    // loop through array of differentFlavors
    const flavorType = differentFlavors[f]; //stores array element in variable flavorType
    if (flavorType in flavors) {
      //checks if flavorType from array element exists as an object property
      flavors[flavorType] += 1; // if it exists, increment by one.
    } else {
      flavors[flavorType] = 1; // if it doesn't exist, add object property and initialize to 1.
    }
  }
  return flavors; // return object flavors with all properties and total number of each one.
}

function describeFlavors(flavor) {
  console.log(flavor);
}

const userInputString = prompt(
  "Please enter the flavors you want separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const flavor = convertStringToFlavors(userInputString);
describeFlavors(flavor);
