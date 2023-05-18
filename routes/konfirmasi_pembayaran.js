const express = require("express");
const response = require("../helpers/response");
const konfirmasi = express.Router();

const { getKonfirmasi, postKonfirmasi, deleteKonfirmasi } = require("../controllers/konfirmasi_pembayaran");

konfirmasi.route("/").get(async (req, res) => {
    try {
        const result = await getKonfirmasi();
        response.success(result, "mengambil seluruh data konfirmasi pembayaran", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

konfirmasi.route("/").post(async (req, res) => {
    try {
        const result = await postKonfirmasi(req.body);
        response.success(result, "menambah data konfirmasi pembayaran", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

konfirmasi.route("/:IdPemesanan").delete(async (req, res) => {
    try {
        const IdPemesanan = req.params.IdPemesanan
        const result = await deleteKonfirmasi(IdPemesanan);
        response.success(result, "menghapus data konfirmasi pembayaran", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

module.exports = konfirmasi;