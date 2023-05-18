const db = require("../configs/database");

exports.getPerusahaan = async () => {
    const query = await db.query("SELECT * from perusahaan")
    return query
};
exports.putPerusahaan = async (data) => {
    const query = await db.query(`UPDATE perusahaan SET ? WHERE IdPerusahaan ='1'`, [data])
    return query
};