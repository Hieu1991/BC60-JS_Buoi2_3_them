/**
 
 */
// bài tập
var btnTinh = document.getElementById("btnTinh");
btnTinh.onclick = function () {
  var tenPhim = document.getElementById("tenPhim").value;
  console.log(tenPhim);
  var giaVeNguoiLon = document.getElementById("giaVeNguoiLon").value * 1;
  var giaVeTreEm = document.getElementById("giaVeTreEm").value * 1;
  var soVeNguoiLon = document.getElementById("soVeNguoiLon").value * 1;
  var soVeTreEm = document.getElementById("soVeTreEm").value * 1;
  var phanTram = document.getElementById("phanTram").value * 1;
  var soVeDaBan = soVeNguoiLon + soVeTreEm;
  var doanhThu = soVeNguoiLon * giaVeNguoiLon + soVeTreEm * giaVeTreEm;
  var tongTienTuThien = doanhThu * (phanTram / 100);
  var tongThuConLai = doanhThu - tongTienTuThien;

  var tagSpan =
    "<p> Tên phim: " +
    tenPhim +
    "</p>" +
    "<p> Số vé đã bán: " +
    soVeDaBan +
    "</p>" +
    "<p> Doang thu: " +
    doanhThu +
    "</p>" +
    "<p> Trích % từ thiện: " +
    phanTram +
    "% </p>" +
    "<p> Tổng tiền từ thiện: " +
    tongTienTuThien +
    "</p>" +
    "<p> Tổng thu được sau khi trừ: " +
    tongThuConLai +
    "</p>";
  var ketqua = document.getElementById("ketqua");
  ketqua.innerHTML = tagSpan;
};
