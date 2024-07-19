#!/usr/bin/node
/**
 * makeRequest - Wrapper function that performs an HTTP GET request to a specified URL.
 *
 * @param {String} url - The URL to fetch data from.
 * @returns {Promise} - A Promise that resolves with the parsed JSON response or rejects with an error.
 */
function makeRequest (url) {
  const request = require('request');
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (error) {
        console.error('Error making request:', error.message);
        reject(error);
      } else {
        try {
          resolve(JSON.parse(body));
        } catch (parseError) {
          console.error('Error parsing JSON:', parseError.message);
          reject(parseError);
        }
      }
    });
  });
}

/**
 * main - Entry point of the script. Makes requests to Star Wars API for movie info
 *        based on the movie ID passed as a command-line parameter.
 *        Retrieves movie character info and prints their names in order of appearance.
 */
async function main () {
  const args = process.argv;

  if (args.length < 3) {
    console.error('Usage: ./0-starwars_characters.js <movie_id>');
    return;
  }

  const movieUrl = 'https://swapi-api.alx-tools.com/api/films/' + args[2];
  let movie;
  try {
    movie = await makeRequest(movieUrl);
  } catch (error) {
    console.error('Error fetching movie info:', error.message);
    return;
  }

  if (!movie.characters || movie.characters.length === 0) {
    console.error('Characters not found for the movie ID:', args[2]);
    return;
  }

  for (const characterUrl of movie.characters) {
    try {
      const character = await makeRequest(characterUrl);
      console.log(character.name);
    } catch (error) {
      console.error('Error fetching character info:', error.message);
    }
  }
}

main();
