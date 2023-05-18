const express = require("express");
const response = require("../helpers/response");
const perusahaan = express.Router();

const { getPerusahaan, putPerusahaan } = require("../controllers/perusahaan");

perusahaan.route("/").get(async (req, res) => {
    try {
        const result = await getPerusahaan();
        response.success(result, "mengambil data perusahaan", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

perusahaan.route("/").put(async (req, res) => {
    try {
        const result = await putPerusahaan(req.body);
        response.success(result, "mengubah data perusahaan", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

module.exports = perusahaan;