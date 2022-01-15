const request = require("request");
const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error, null);
      }
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      const data = JSON.parse(body);
      if (data[0]) {
        callback(null, data[0].description);
      } else {
        callback("Not found", null);
      }
    }
  );
};
module.exports = { fetchBreedDescription };