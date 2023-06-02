const db = require("../configs/database");

exports.getAllPemesananByPeriode = async (periodeAwal, periodeAkhir) => {
    const query = await db.query(`SELECT p.IdPemesanan, p.TanggalMasuk, mp.NamaPembayaran, p.TanggalPemesanan, p.Total, p.Status, (SELECT SUM(Qty) from detail_pemesanan where IdPemesanan=p.IdPemesanan) as TotalQty FROM pemesanan AS p INNER JOIN metode_pembayaran as mp ON p.IdPembayaran = mp.IdPembayaran WHERE p.TanggalMasuk BETWEEN '${periodeAwal}' AND '${periodeAkhir}' ORDER BY p.IdPemesanan DESC`)
    console.log({query})
    return query
};

exports.getQtyKategori = async (periodeAwal, periodeAkhir) => {
    const query = await db.query(`SELECT kk.NamaKategori, (SELECT SUM(dp.Qty) from detail_pemesanan as dp INNER JOIN pemesanan as p ON p.IdPemesanan=dp.IdPemesanan WHERE p.TanggalMasuk BETWEEN '${periodeAwal}' AND '${periodeAkhir}' AND dp.IdKategori=kk.IdKategori) as Total from kategori_kolam as kk`)
    console.log({query})
    return query
};