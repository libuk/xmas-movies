// const yaml = require('js-yaml');
// const fs = require('fs');

// let movies;

// try {
//   movies = yaml.safeLoad(fs.readFileSync('./movies.yml', 'utf8'));
// } catch (e) {
//   throw new Error(e)
// }

module.exports = function getRandomMovie(movies: string) {
  return movies[Math.floor(Math.random() * movies.length)]
}