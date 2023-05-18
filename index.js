const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const admin = require("./routes/admin");
const carousel = require("./routes/carousel");
const kategori = require('./routes/kategori_kolam');
const kolam = require('./routes/kolam');
const konfirmasi = require('./routes/konfirmasi_pembayaran');
const pembayaran = require('./routes/metode_pembayara');
const pengguna = require('./routes/pengguna');
const perusahaan = require('./routes/perusahaan');
const rating = require('./routes/rating');
const pemesanan = require("./routes/pemesanan");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
//Izin Akses Databse ke React
app.use(cors());

app.get("/", (req, res) => {
	res.send("API Ready To GO!");
});

app.use("/admin", admin);
app.use("/carousel", carousel);
app.use("/kategori", kategori);
app.use("/kolam", kolam);
app.use("/konfirmasi", konfirmasi);
app.use("/pembayaran", pembayaran); // for mobile device, you must filtering data by Status!
app.use("/pengguna", pengguna);
app.use("/perusahaan", perusahaan);
app.use("/rating", rating);
app.use("/pemesanan", pemesanan);

app.listen(PORT, () => {
	console.log(`Server Berjalan di http://localhost:${PORT}`);
});
