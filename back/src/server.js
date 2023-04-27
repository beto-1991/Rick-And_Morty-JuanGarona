//>>>>>>>>>>>>>>>>>>>>>>>>> EXPRESS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./routes");
const cors = require("cors");

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(express.json());
server.use("/", router);
server.use(cors());
server.listen(PORT, () => {
  console.log("Server rised in port " + PORT);
});

//>>>>>>>>>>>>>>>>>>>>>>>>> NODE JS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// var http = require("http");
// var getCharById = require("./controllers/getCharById");
// var getCharDetail = require("./controllers/getCharDetail");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     if (req.url.includes("onsearch")) {
//       const id = req.url.split("/").at(-1);
//       getCharById(res, id);
//     }
//     if (req.url.includes("detail")) {
//       const id = req.url.split("/").at(-1);
//       getCharDetail(res, id);
//     }
//   })
//   .listen(3001, "localhost");
