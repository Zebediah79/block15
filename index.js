// /**
//  * @param {string} commaSeparatedFlavors
//  * @returns {number[]} the string converted into an array of numbers
//  */

function convertStringToFlavors(commaSeparatedFlavors) {
  const differentFlavors = commaSeparatedFlavors.split(",");
  console.log(differentFlavors);
  const flavors = {};
  for (let f in differentFlavors) {
    const flavType = differentFlavors[f];
    console.log(flavType);
    if ("flavType" in flavors) {
      flavors[flavType] += 1;
    } else {
      flavors[flavType] = 1;
    }
  }
  return flavors;
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
