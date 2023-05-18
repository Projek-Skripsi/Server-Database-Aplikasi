const express = require("express");
const response = require("../helpers/response");
const rating = express.Router();

const { getAllRating, postRating } = require("../controllers/rating");

rating.route("/").get(async (req, res) => {
    try {
        const result = await getAllRating();
        response.success(result, "mengambil seluruh data rating", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

rating.route("/").post(async (req, res) => {
    try {
        const result = await postRating(req.body);
        response.success(result, "menambah data rating", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

module.exports = rating;