const db = require("../configs/database");

exports.getAllPemesananByPeriode = async (periodeAwal, periodeAkhir) => {
    const query = await db.query(`SELECT p.TanggalMasuk, SUM(CASE WHEN kk.NamaKategori = 'Anak-Anak' THEN dp.Qty ELSE 0 END) AS Anak, SUM(CASE WHEN kk.NamaKategori = 'Dewasa' THEN dp.Qty ELSE 0 END) AS Dewasa FROM pemesanan p INNER JOIN detail_pemesanan dp ON p.IdPemesanan = dp.IdPemesanan INNER JOIN kategori_kolam kk ON kk.IdKategori = dp.IdKategori WHERE p.TanggalMasuk BETWEEN '${periodeAwal}' AND '${periodeAkhir}' GROUP BY p.TanggalMasuk`)
    return query;
};

exports.getQtyKategori = async (periodeAwal, periodeAkhir) => {
    const query = await db.query(`SELECT kk.NamaKategori, (SELECT SUM(dp.Qty) from detail_pemesanan as dp INNER JOIN pemesanan as p ON p.IdPemesanan=dp.IdPemesanan WHERE p.TanggalMasuk BETWEEN '${periodeAwal}' AND '${periodeAkhir}' AND dp.IdKategori=kk.IdKategori) as Total from kategori_kolam as kk`)
    return query
};

exports.getTotalPendapatan = async (periodeAwal, periodeAkhir) => {
    const query = await db.query(`SELECT SUM(Total) AS Total FROM pemesanan WHERE TanggalMasuk BETWEEN '${periodeAwal}' AND '${periodeAkhir}' AND (Status='Berhasil' OR Status='Selesai')`)
    return query
};