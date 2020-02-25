// document.getElementById()
function hienThiThongTin(){
    console.log(123654);
    // lay du lieu
    var maSV = getEle("txtMaSV").value;
    var tenSV = getEle("txtTenSV").value;
    var loaiSV = getEle("loaiSV").value;
    var diemToan = getEle("txtDiemToan").value;
    var diemVan = getEle("txtDiemVan").value;

    // console.log(maSV, tenSV, loaiSV, diemToan, diemVan);

    // do du lieu ra
    getEle("spanTenSV").innerHTML = tenSV;
    getEle("spanMaSV").innerHTML = maSV;
    getEle("spanLoaiSV").innerHTML = loaiSV;
    getEle("spanDTB").innerHTML = tinhDiemTB(diemToan, diemVan);
    getEle("spanXepLoai").innerHTML = xepLoaiSV(diemToan, diemVan);
}

function tinhDiemTB(toan, van){
    var dtb = (parseFloat(toan) + parseFloat(van)) / 2;
    return dtb;
}

function xepLoaiSV(toan, van){
    var dtb = tinhDiemTB(toan, van);
    if(dtb >= 8.0 && dtb <= 10.0){
        return "Giỏi";
    } else if(dtb >= 5 && dtb <8){
        return "khá";
    } else {
        return "yếu";
    }
}
function getEle(id){
     return document.getElementById(id);
}