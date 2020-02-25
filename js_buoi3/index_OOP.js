function hienThiThongTin() {

    // lay du lieu
    var _maSV = getEle("txtMaSV").value;
    var _tenSV = getEle("txtTenSV").value;
    var _loaiSV = getEle("loaiSV").value;
    var _diemToan = getEle("txtDiemToan").value;
    var _diemVan = getEle("txtDiemVan").value;
    // console.log(_maSV, _tenSV, _loaiSV, _diemToan, _diemVan);


    // Tạo đối tượng
    var student = {
        //  mặc định trong đối tượng có key và value key:value
        // có phương thức và thuộc tính trong OOP
        // thuộc tính
        maSV: _maSV,
        tenSV: _tenSV,
        loaiSV: _loaiSV,
        diemToan: _diemToan,
        diemVan: _diemVan,
        // phương thức
        tinhDTB: function () {
            var dtb = (parseFloat(this.diemToan) + parseFloat(this.diemVan)) / 2;
            return dtb;
        },

        xepLoaiSV: function () {
            var dtb = this.tinhDTB();
            if (dtb >= 8.0 && dtb <= 10.0) {
                return "Giỏi";
            } else if (dtb >= 5 && dtb < 8) {
                return "khá";
            } else {
                return "yếu";
            }
        }

    };
    console.log(student);
    // đổ ra dữ liệu
    getEle("spanTenSV").innerHTML = student.tenSV; // muốn tri xuất dữ liệu từ đối tượng student thì phải có lệnh .student rồi mới tới cái thuộc tính muốn lấy ra
    getEle("spanMaSV").innerHTML = student.maSV;
    getEle("spanLoaiSV").innerHTML = student.loaiSV;
    getEle("spanDTB").innerHTML = student.tinhDTB();
    getEle("spanXepLoai").innerHTML = student.xepLoaiSV();



}
function getEle(id) {
    return document.getElementById(id);
}