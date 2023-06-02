const express = require("express");
const response = require("../helpers/response");
const pembayaran = express.Router();

const { getAllPembayaran, getPembayaran, postPembayaran, putPembayaran } = require("../controllers/metode_pembayaran");

pembayaran.route("/").get(async (req, res) => {
    try {
        const result = await getAllPembayaran();
        response.success(result, "mengambil seluruh data metode pembayaran", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

pembayaran.route("/:IdPembayaran").get(async (req, res) => {
    try {
        const IdPembayaran = req.params.IdPembayaran
        const result = await getPembayaran(IdPembayaran);
        response.success(result, "mengambil data metode pembayaran berdasarkan Id", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

pembayaran.route("/").post(async (req, res) => {
    try {
        const result = await postPembayaran(req.body);
        response.success(result, "menambah data metode pembayaran", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

pembayaran.route("/:IdPembayaran").put(async (req, res) => {
    try {
        const IdPembayaran = req.params.IdPembayaran
        const result = await putPembayaran(IdPembayaran, req.body);
        response.success(result, "mengubah data metode pembayaran", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

module.exports = pembayaran;