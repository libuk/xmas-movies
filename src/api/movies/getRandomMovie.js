module.exports = function getRandomMovie(movies) {
  return movies[Math.floor(Math.random() * movies.length)]
}