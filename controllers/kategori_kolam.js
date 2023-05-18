const db = require("../configs/database");

exports.getAllKategori = async () => {
    const query = await db.query("SELECT * from kategori_kolam")
    return query
};

exports.getKategori = async (IdKategori) => {
    const query = await db.query(`SELECT * from kategori_kolam WHERE IdKategori ='${IdKategori}'`)
    return query
};

exports.postKategori = async (data) => {
    const query = await db.query("INSERT INTO kategori_kolam SET ?", [data])
    return { IdKategori: query.insertId }
};

exports.putKategori = async (IdKategori, data) => {
    const query = await db.query(`UPDATE kategori_kolam SET ? WHERE IdKategori ='${IdKategori}'`, [data])
    return query
};