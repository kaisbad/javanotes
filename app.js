const students = ["Matt", "Mark", "Josephine", "Thomas"];
//console.log(students[0]);
//students.forEach((student) => console.log(student));
//loop through every element in list

const movie = {
  title: "Star Wars",
  release: 1977,
  actors: ["Mark", "Harrison", ""],

  title,
};
movies.forEach((movie) => console.log(movie.title));
//filter, to get a new array of movies that match criteria
//array name DOT Array command then arrow function that accepts singular element of array
const newMovies = movies.filter((movie) => movie.release > 1990);
console.log(newMovies);

movies
    .filter((movie) => movie.release >1990)
    .