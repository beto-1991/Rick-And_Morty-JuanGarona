const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { id } = req.params;
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      return response.data;
    })
    .then(({ name, gender, species, image, origin, status }) => {
      const character = {
        id,
        name,
        gender,
        species,
        image,
        origin: origin.name,
        status,
      };

      return res.status(200).json(character);
    })
    .catch((error) => {
      return res.status(500).json(error.message);
    });
};

//>>>>>>>>>>>>>>>>>>>>>>>>> NODE JS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// const axios = require("axios");

// const getCharById = (res, id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//       return response.data;
//     })
//     .then(({ name, gender, species, image, origin, status }) => {
//       const character = {
//         id,
//         name,
//         gender,
//         species,
//         image,
//         origin: origin.name,
//         status,
//       };
//       res.writeHead(200, { "Content-type": "application/json" });
//       res.end(JSON.stringify(character));
//     })
//     .catch((error) => {
//       return res
//         .writeHead(500, { "Content-type": "text/plain" })
//         .end(error.message);
//     });
// };

module.exports = getCharById;
