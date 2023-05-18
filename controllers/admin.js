const db = require("../configs/database");

exports.getAdmin = async () => {
    const query = db.query("select * from admin")
    return query
};