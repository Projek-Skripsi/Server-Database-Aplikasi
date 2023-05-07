const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
//Izin Akses Databse ke React
app.use(cors());

app.get("/", (req, res) => {
	res.send("API Ready To GO!");
});

app.listen(PORT, () => {
	console.log(`Server Berjalan di http://localhost:${PORT}`);
});
