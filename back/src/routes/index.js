const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

const login = require("../controllers/login");
const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
