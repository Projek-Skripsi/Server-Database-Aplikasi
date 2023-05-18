const db = require("../configs/database");

exports.getAllPembayaran = async () => {
    const query = await db.query("SELECT * from metode_pembayaran")
    return query
};

exports.getPembayaran = async (IdPembayaran) => {
    const query = await db.query(`SELECT * from metode_pembayaran WHERE IdPembayaran ='${IdPembayaran}'`)
    return query
};

exports.postPembayaran = async (data) => {
    const query = await db.query("INSERT INTO metode_pembayaran SET ?", [data])
    return { IdPembayaran: query.insertId }
};

exports.putPembayaran = async (IdPembayaran, data) => {
    const query = await db.query(`UPDATE metode_pembayaran SET ? WHERE IdPembayaran ='${IdPembayaran}'`, [data])
    return query
};