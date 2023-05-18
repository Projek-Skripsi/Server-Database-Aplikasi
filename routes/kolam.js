const express = require("express");
const response = require("../helpers/response");
const kolam = express.Router();

const { getAllKolam, getKolam, postKolam, putKolam, deleteKolam } = require("../controllers/kolam");

kolam.route("/").get(async (req, res) => {
    try {
        const result = await getAllKolam();
        response.success(result, "mengambil seluruh data kolam", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

kolam.route("/:IdKolam").get(async (req, res) => {
    try {
        const IdKolam = req.params.IdKolam
        const result = await getKolam(IdKolam);
        response.success(result, "mengambil data kolam berdasarkan Id", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

kolam.route("/").post(async (req, res) => {
    try {
        const result = await postKolam(req.body);
        response.success(result, "menambah data kolam", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

kolam.route("/:IdKolam").put(async (req, res) => {
    try {
        const IdKolam = req.params.IdKolam
        const result = await putKolam(IdKolam, req.body);
        response.success(result, "mengubah data kolam", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

kolam.route("/:IdKolam").delete(async (req, res) => {
    try {
        const IdKolam = req.params.IdKolam
        const result = await deleteKolam(IdKolam);
        response.success(result, "menghapus data kolam", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

module.exports = kolam;