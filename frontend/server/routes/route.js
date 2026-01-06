// (B) Existing Routes (1–2 samples only)
const express = require("express")
const router = express.Router();
const routecontroller = require("../controller/route")

router.get("/routes/:departure/:arrival/:date",
    routecontroller.getoneroute
);
module.exports = router;