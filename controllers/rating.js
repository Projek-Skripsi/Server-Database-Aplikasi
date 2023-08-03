const db = require("../configs/database");

exports.getAllRating = async () => {
    const query = await db.query("SELECT r.IdRating, r.TanggalUpload, r.Ulasan, r.Bintang, r.KategoriRating, p.UrlGambar, p.Nama FROM rating as r INNER JOIN pengguna as p on r.IdPengguna = p.IdPengguna ORDER BY r.IdRating DESC")
    return query
};

exports.postRating = async (data) => {
    const query = await db.query("INSERT INTO rating SET ?", [data])
    return { IdRating: query.insertId }
};