const express = require("express");
const response = require("../helpers/response");
const pengguna = express.Router();

const { getAllPengguna, getPengguna, postPengguna, putPengguna } = require("../controllers/pengguna");

pengguna.route("/").get(async (req, res) => {
    try {
        const result = await getAllPengguna();
        response.success(result, "mengambil seluruh data pengguna", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

pengguna.route("/:IdPengguna").get(async (req, res) => {
    try {
        const IdPengguna = req.params.IdPengguna
        const result = await getPengguna(IdPengguna);
        response.success(result, "mengambil data pengguna berdasarkan Id", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

pengguna.route("/").post(async (req, res) => {
    try {
        const result = await postPengguna(req.body);
        response.success(result, "menambah data pengguna", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

pengguna.route("/:IdPengguna").put(async (req, res) => {
    try {
        const IdPengguna = req.params.IdPengguna
        const result = await putPengguna(IdPengguna, req.body);
        response.success(result, "mengubah data pengguna", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

module.exports = pengguna;