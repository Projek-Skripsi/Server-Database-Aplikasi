const db = require("../configs/database");

exports.getAllKolam = async () => {
    const query = await db.query("SELECT k.IdKolam, k.Judul, k.IdKategori, kk.NamaKategori, k.UrlGambar, k.Status from kolam as k INNER JOIN kategori_kolam as kk ON k.IdKategori = kk.IdKategori")
    return query
};

exports.getKolam = async (IdKolam) => {
    const query = await db.query(`SELECT * from kolam WHERE IdKolam ='${IdKolam}'`)
    return query
};

exports.postKolam = async (data) => {
    const query = await db.query("INSERT INTO kolam SET ?", [data])
    return { IdKolam: query.insertId }
};

exports.putKolam = async (IdKolam, data) => {
    const query = await db.query(`UPDATE kolam SET ? WHERE IdKolam ='${IdKolam}'`, [data])
    return query
};

exports.deleteKolam = async (IdKolam) => {
    const query = await db.query(`DELETE from kolam WHERE IdKolam ='${IdKolam}'`)
    return query
};