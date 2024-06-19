#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(url, (err, res, body) => {
  if (err) {
    console.error(`Error fetching movie details: ${err}`);
    return;
  }

  if (res.statusCode !== 200) {
    console.error(`Failed to fetch movie details. Status code: ${res.statusCode}`);
    return;
  }

  try {
    const filmData = JSON.parse(body);
    const charactersArray = filmData.characters;

    charactersArray.forEach(characterUrl => {
      request(characterUrl, (err, res, body) => {
        if (err) {
          console.error(`Error fetching character details: ${err}`);
          return;
        }

        if (res.statusCode !== 200) {
          console.error(`Failed to fetch character details. Status code: ${res.statusCode}`);
          return;
        }

        try {
          const characterData = JSON.parse(body);
          console.log(characterData.name);
        } catch (error) {
          console.error(`Error parsing character JSON: ${error}`);
        }
      });
    });
  } catch (error) {
    console.error(`Error parsing movie JSON: ${error}`);
  }
});
