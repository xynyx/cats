// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, printBreed) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    printBreed(data)
  });
};

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed);
}

module.exports = breedDetailsFromFile;