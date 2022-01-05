const fs = require("fs");
const { title } = require("process");
const addMovie = (movieArray, movieObject) => {
  try {
    // console.log(movieArray);
    console.log(movieObject);
    console.log(
      "Thank you for your input, this data has now been added to the list!"
    );
    movieArray.push(movieObject);
    // console.log(movieArray);
    const stringyObj = JSON.stringify(movieArray);
    // console.log(stringyObj);
    fs.writeFileSync("./storage.json", stringyObj);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addMovie,
};
