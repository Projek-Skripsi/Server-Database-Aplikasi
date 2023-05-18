const db = require("../configs/database");

exports.getKonfirmasi = async () => {
    const query = await db.query("SELECT * from konfirmasi_pembayaran")
    return query
};

exports.postKonfirmasi = async (data) => {
    const query = await db.query("INSERT INTO konfirmasi_pembayaran SET ?", [data])
    return { IdPemesanan: query.insertId }
};

exports.deleteKonfirmasi = async (IdPemesanan) => {
    const query = await db.query(`DELETE from konfirmasi_pembayaran WHERE IdPemesanan ='${IdPemesanan}'`)
    return query
};