#!/usr/bin/node
/**
 * makeRequest - Wrapper function that performs an HTTP GET request to a specified URL.
 *
 * @param {String} url - The URL to fetch data from.
 * @returns {Promise} - A Promise that resolves with the parsed JSON response or rejects with an error.
 */
function makeRequest(url) {
  const request = require('request');
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (error) reject(error);
      else resolve(JSON.parse(body));
    });
  });
}

/**
 * main - Entry point of the script. Makes requests to Star Wars API for movie info
 *        based on the movie ID passed as a command-line parameter.
 *        Retrieves movie character info and prints their names in order of appearance.
 */
async function main() {
  const args = process.argv;

  if (args.length < 3) return;

  const movieUrl = 'https://swapi-api.alx-tools.com/api/films/' + args[2];
  const movie = await makeRequest(movieUrl);

  if (!movie.characters) return;
  for (const characterUrl of movie.characters) {
    const character = await makeRequest(characterUrl);
    console.log(character.name);
  }
}

main();
