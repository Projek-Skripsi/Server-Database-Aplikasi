const express = require("express");
const response = require("../helpers/response");
const laporan = express.Router();

const { getAllPemesananByPeriode, getQtyKategori } = require("../controllers/laporan");

laporan.route("/table").get(async (req, res) => {
    try {
        const {periodeAwal, periodeAkhir} = req.body
        const result = await getAllPemesananByPeriode(periodeAwal, periodeAkhir);
        response.success(result, "mengambil seluruh data laporan untuk tabel", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

laporan.route("/qtykategori").get(async (req, res) => {
    try {
        const {periodeAwal, periodeAkhir} = req.body
        const result = await getQtyKategori(periodeAwal, periodeAkhir);
        response.success(result, "mengambil seluruh data laporan untuk qty kategori", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

module.exports = laporan;