const db = require("../configs/database");

exports.getAllPengguna = async () => {
    const query = await db.query("SELECT * from pengguna")
    return query
};

exports.getPengguna = async (IdPengguna) => {
    const query = await db.query(`SELECT * from pengguna WHERE IdPengguna ='${IdPengguna}'`)
    return query
};

exports.postPengguna = async (data) => {
    const query = await db.query("INSERT INTO pengguna SET ?", [data])
    return { IdPengguna: query.insertId }
};

exports.putPengguna = async (IdPengguna, data) => {
    const query = await db.query(`UPDATE pengguna SET ? WHERE IdPengguna ='${IdPengguna}'`, [data])
    return query
};