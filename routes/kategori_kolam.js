const express = require("express");
const response = require("../helpers/response");
const kategori = express.Router();

const { getAllKategori, getKategori, postKategori, putKategori } = require("../controllers/kategori_kolam");

kategori.route("/").get(async (req, res) => {
    try {
        const result = await getAllKategori();
        response.success(result, "mengambil seluruh data kategori kolam", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

kategori.route("/:IdKategori").get(async (req, res) => {
    try {
        const IdKategori = req.params.IdKategori
        const result = await getKategori(IdKategori);
        response.success(result, "mengambil data kategori berdasarkan Id", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

kategori.route("/").post(async (req, res) => {
    try {
        const result = await postKategori(req.body);
        response.success(result, "menambah data kategori kolam", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

kategori.route("/:IdKategori").put(async (req, res) => {
    try {
        const IdKategori = req.params.IdKategori
        const result = await putKategori(IdKategori, req.body);
        response.success(result, "mengubah data kategori kolam", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

module.exports = kategori;