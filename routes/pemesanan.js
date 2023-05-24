const express = require("express");
const response = require("../helpers/response");
const pemesanan = express.Router();

const { getAllPemesanan, getPemesananByIdPemesanan, getPemesananByIdPengguna, getPengunjungHariIni, postPemesanan, putPemesanan } = require("../controllers/pemesanan");

pemesanan.route("/").get(async (req, res) => {
    try {
        const result = await getAllPemesanan();
        response.success(result, "mengambil seluruh data pemesanan", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

pemesanan.route("/:IdPemesanan").get(async (req, res) => {
    try {
        const IdPemesanan = req.params.IdPemesanan
        const result = await getPemesananByIdPemesanan(IdPemesanan);
        response.success(result, "mengambil data pemesanan berdasarkan id pemesanan", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

pemesanan.route("/user/:IdPengguna").get(async (req, res) => {
    try {
        const IdPengguna = req.params.IdPengguna
        const result = await getPemesananByIdPengguna(IdPengguna);
        response.success(result, "mengambil data pemesanan berdasarkan id pengguna", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

pemesanan.route("/totalPengunjung/:tanggal").get(async (req, res) => {
    try {
        const tanggal = req.params.tanggal
        const result = await getPengunjungHariIni(tanggal);
        response.success(result, "mengambil data jumlah pengunjung hari ini", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

pemesanan.route("/").post(async (req, res) => {
    const { IdPemesanan, IdPengguna, TanggalMasuk, TanggalPemesanan, IdPembayaran, Total, Status, detail} = req.body

    const pemesanan = {
        IdPemesanan, IdPengguna, TanggalMasuk, TanggalPemesanan, IdPembayaran, Total, Status
    }

    try {
        const result = await postPemesanan(pemesanan, detail);
        response.success(result, "menambah data pemesanan", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

pemesanan.route("/:IdPemesanan").put(async (req, res) => {
    try {
        const IdPemesanan = req.params.IdPemesanan
        const result = await putPemesanan(IdPemesanan, req.body);
        response.success(result, "mengubah data status pemesanan", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

module.exports = pemesanan;