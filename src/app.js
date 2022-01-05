const fs = require("fs");
const { addMovie } = require("./utils/index");
const app = () => {
  let movieArray;
  try {
    movieArray = JSON.parse(fs.readFileSync("./storage.json"));
  } catch (error) {
    movieArray = [];
  }
  if (
    process.argv[2] === "title" &&
    process.argv[4] === "actor" &&
    process.argv[6] === "year"
  ) {
    addMovie(movieArray, {
      title: process.argv[3],
      actor: process.argv[5],
      year: process.argv[7],
    });
  } else {
    console.log("I don't understand, please try again.");
  }
};
app();
