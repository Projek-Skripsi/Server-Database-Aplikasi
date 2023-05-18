const db = require("../configs/database");

exports.getCarousel = async () => {
    const query = await db.query("SELECT * from carousel")
    return query
};

exports.postCarousel = async (data) => {
    const query = await db.query("INSERT INTO carousel SET ?", [data])
    return { IdCarousel: query.insertId }
};

exports.deleteCarousel = async (IdCarousel) => {
    const query = await db.query("DELETE from carousel WHERE IdCarousel ='" + IdCarousel + "'")
    return query
};