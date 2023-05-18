const express = require("express");
const response = require("../helpers/response");
const carousel = express.Router();

const { getCarousel, postCarousel, deleteCarousel } = require("../controllers/carousel");

carousel.route("/").get(async (req, res) => {
    try {
        const result = await getCarousel();
        response.success(result, "mengambil data carousel", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

carousel.route("/").post(async (req, res) => {
    try {
        const result = await postCarousel(req.body);
        response.success(result, "menambah data carousel", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

carousel.route("/:IdCarousel").delete(async (req, res) => {
    try {
        const IdCarousel = req.params.IdCarousel
        const result = await deleteCarousel(IdCarousel);
        response.success(result, "menghapus data carousel", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

module.exports = carousel;