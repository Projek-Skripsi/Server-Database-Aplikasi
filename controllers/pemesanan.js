const db = require("../configs/database");

exports.getAllPemesanan = async () => {
	const query = await db.query("SELECT p.IdPemesanan, p.IdPengguna, p.TanggalMasuk, mp.NamaPembayaran, mp.NoRekening, mp.An, p.TanggalPemesanan, p.Total, p.Status, kk.NamaKategori, dp.Harga, dp.Qty FROM pemesanan AS p INNER JOIN detail_pemesanan AS dp ON p.IdPemesanan = dp.IdPemesanan INNER JOIN metode_pembayaran as mp ON p.IdPembayaran = mp.IdPembayaran LEFT JOIN kategori_kolam AS kk ON kk.IdKategori = dp.IdKategori")

	if (!query.error) {
		let listPemesanan = [], listDetail = [], lastPush = "";
		
		for (let index in query) {
			if (lastPush !== query[index].IdPemesanan) {
                for (let i in query) {
                    if (query[i].IdPemesanan === query[index].IdPemesanan) {
                        listDetail.push({
                            NamaKategori: query[i].NamaKategori,
                            Harga: query[i].Harga,
                            Qty: query[i].Qty,
                        });
                    }
                }
				listPemesanan.push({
                    IdPemesanan: query[index].IdPemesanan,
					IdPengguna: query[index].IdPengguna,
					TanggalMasuk: query[index].TanggalMasuk,
					NamaPembayaran: query[index].NamaPembayaran,
					NoRekening: query[index].NoRekening,
					An: query[index].An,
					TanggalPemesanan: query[index].TanggalPemesanan,
					Total: query[index].Total,
					Status: query[index].Status,
					detail: listDetail,
				});
                listDetail = []
				lastPush = query[index].IdPemesanan;
			}
		}
        return { pemesanan : listPemesanan }
	}
};

exports.getPemesanan = async (IdPengguna) => {
	const query = await db.query(`SELECT p.IdPemesanan, p.TanggalMasuk, mp.NamaPembayaran, mp.NoRekening, mp.An, p.TanggalPemesanan, p.Total, p.Status, kk.NamaKategori, dp.Harga, dp.Qty FROM pemesanan AS p INNER JOIN detail_pemesanan AS dp ON p.IdPemesanan = dp.IdPemesanan INNER JOIN metode_pembayaran as mp ON p.IdPembayaran = mp.IdPembayaran LEFT JOIN kategori_kolam AS kk ON kk.IdKategori = dp.IdKategori WHERE p.IdPengguna='${IdPengguna}'`)

	if (!query.error) {
		let listPemesanan = [], listDetail = [], lastPush = "";
		
		for (let index in query) {
			if (lastPush !== query[index].IdPemesanan) {
                for (let i in query) {
                    if (query[i].IdPemesanan === query[index].IdPemesanan) {
                        listDetail.push({
                            NamaKategori: query[i].NamaKategori,
                            Harga: query[i].Harga,
                            Qty: query[i].Qty,
                        });
                    }
                }
				listPemesanan.push({
                    IdPemesanan: query[index].IdPemesanan,
					TanggalMasuk: query[index].TanggalMasuk,
					NamaPembayaran: query[index].NamaPembayaran,
					NoRekening: query[index].NoRekening,
					An: query[index].An,
					TanggalPemesanan: query[index].TanggalPemesanan,
					Total: query[index].Total,
					Status: query[index].Status,
					detail: listDetail,
				});
                listDetail = []
				lastPush = query[index].IdPemesanan;
			}
		}
        return { pemesanan : listPemesanan }
	}
};

exports.postPemesanan = async (pemesanan, detail) => {
	const query = await db.query("INSERT INTO pemesanan SET ?", [pemesanan])
	
	if (!query.error) {
		const detail_pemesanan = [];
		
		detail.map((tiket) => {
			detail_pemesanan.push([pemesanan.IdPemesanan, tiket.IdKategori, tiket.Harga, tiket.Qty]);
		});

		const addDetailPemesanan = await postDetailTransaction(detail_pemesanan);
        return addDetailPemesanan;
	}
};

exports.putPemesanan = async (IdPemesanan, data) => {
    const query = await db.query(`UPDATE pemesanan SET ? WHERE IdPemesanan ='${IdPemesanan}'`, [data])
    return query
};


async function postDetailTransaction(detail_pemesanan) {
	const query = await db.query("INSERT INTO detail_pemesanan(IdPemesanan,IdKategori,Harga,Qty) VALUES ?", [detail_pemesanan])
    return query
};