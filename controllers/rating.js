const db = require("../configs/database");

exports.getAllRating = async () => {
    const query = await db.query("SELECT * from rating")
    return query
};

exports.postRating = async (data) => {
    const query = await db.query("INSERT INTO rating SET ?", [data])
    return { IdRating: query.insertId }
};