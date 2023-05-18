const express = require("express");
const response = require("../helpers/response");
const admin = express.Router();

const { getAdmin } = require("../controllers/admin");

admin.route("/").get(async (req, res) => {
    try {
        const result = await getAdmin();
        response.success(result, "mengambil data admin", res)
    } catch(err) {
        response.error({ error: err.message }, req.originalUrl, 403, res)
    }
});

module.exports = admin;