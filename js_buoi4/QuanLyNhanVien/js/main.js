var danhSachNhanVien = new DanhSachNhanVien();
var validation = new Validation();
getLocalStorge();

console.log(123);
getEle("btnThem").addEventListener("click", function () {
    console.log(1236578);
    getEle("btnCapNhat").style.display = "none";
    getEle("btnThemNV").style.display = "block";

    getEle("msnv").removeAttribute("disabled");
})

getEle("btnThemNV").addEventListener("click", function () {
    var maNV = getEle("msnv").value;
    var hoTen = getEle("name").value;
    var email = getEle("email").value;
    var password = getEle("password").value;
    var date = getEle("datepicker").value;
    var chucVu = getEle("chucvu").value;
    // console.log(nhanVien);
    // thủ thuật đặt cờ
    var isValid = true;

    // gọi lại hàm
    /*Mã NV */
    isValid &= validation.kiemTraRong(maNV, "tbMaNV", "(*) Mã nhân viên không được rỗng") && validation.checkMaTrung(maNV, "tbMaNV", "Ma NV bi trung", danhSachNhanVien.mangNhanVien);
    /*hoTen */
    isValid &= validation.kiemTraRong(hoTen, "tbTen", "(*) Tên nhân viên không được rỗng") && validation.kiemTraChuoi(hoTen, "tbTen", "(*) vui lòng nhập vô chuỗi");
    /*email */
    isValid &= validation.kiemTraRong(email, "tbEmail", "(*) Email không được rỗng") && validation.checkEmail(email, "tbEmail", "(*) Email không đúng định dạng");
    /*password */
    isValid &= validation.kiemTraRong(password, "tbMatKhau", "(*) Password không được rỗng") && validation.kiemTraDoDaiKyTu(password, "tbMatKhau", "(*)Ký tự phải từ 6-12", 6, 12);
    /*chức vụ */
    isValid &= validation.kiemTraChucVu("chucvu", "tbChucVu", "(*)vui lòng chọn chức vụ");


    console.log(isValid);

    // thêm 1 nhân viên vào mảng
    if (isValid) {
        console.log("them nhan vien thanh cong");
        var nhanVien = new NhanVien(maNV, hoTen, email, password, date, chucVu);
        danhSachNhanVien.themNhanVien(nhanVien);
        taoBang();
        setLocalStorge();
    }

    // console.log(danhSachNhanVien.mangNhanVien);
});

function taoBang(mang = danhSachNhanVien.mangNhanVien) {
    // string template 
    /**
     * var name = "cybersoft";
     * var result = `hello ${name}` // => hello cybersoft
     */
    var tbody = getEle("tableDanhSach");
    var content = "";
    mang.map(function (item, index) {
        content += `
        <tr> 
            <td>${item.maNV}</td>
            <td>${item.hoTen}</td>
            <td>${item.email}</td>
            <td>${item.date}</td>
            <td>${item.chucVu}</td>
            <td>
            <button class= "btn btn-success" data-toggle="modal" data-target="#myModal" onclick="suaNhanVien('${item.maNV}')">Sửa</button> 
            <button class= "btn btn-danger" onclick="xoa('${item.maNV}')">Xóa</button> 
            </td>
        </tr>
        `;
    })
    tbody.innerHTML = content;
}

// Luu mang xuong bang tam
// tham so phai la chuoi
function setLocalStorge() {

    // khi lưu xuống localStorage chuyển data thành String

    localStorage.setItem(
        "DanhSachNhanVien",
        JSON.stringify(danhSachNhanVien.mangNhanVien)
    );
}

// Xóa nhân viên
function xoa(maNV){
    console.log(maNV);
    danhSachNhanVien.xoaNhanVien(maNV);
    taoBang();
    setLocalStorge();
}
// sửa nhân viên
function suaNhanVien(maNV){
    getEle("btnThemNV").style.display = "none";
    getEle("btnCapNhat").style.display = "block";

    var nhanVien = danhSachNhanVien.layThongTinNguoiDung(maNV);
    console.log(nhanVien);
    getEle("msnv").value = nhanVien.maNV;
    // setAttribute là 1 hàm 
    getEle("msnv").setAttribute("disabled", true); //////////
    getEle("name").value = nhanVien.hoTen;
    getEle("email").value = nhanVien.email;
    getEle("password").value = nhanVien.password;
    getEle("datepicker").value = nhanVien.date;
    getEle("chucvu").value = nhanVien.chucVu;
}
// cập nhật
getEle("btnCapNhat").addEventListener("click",function(){
    var maNV = getEle("msnv").value;
    var hoTen = getEle("name").value;
    var email = getEle("email").value;
    var password = getEle("password").value;
    var date = getEle("datepicker").value;
    var chucVu = getEle("chucvu").value;

    var nhanVien = new NhanVien(maNV, hoTen, email, password, date, chucVu);
    danhSachNhanVien.capNhatThongTinNguoiDung(nhanVien);
    taoBang();
    setLocalStorge();
});

// tìm kiếm name
getEle("searchName").addEventListener("keyup", function(){
    // console.log(12365);
    var chuoiTimKiem = getEle("searchName").value;
    console.log(chuoiTimKiem);
   var mangTimKiem = danhSachNhanVien.timNhanVien(chuoiTimKiem);

   taoBang(mangTimKiem);

});

// Lay mang duoc luu tru tu localStorge
function getLocalStorge() {

    // khi lấy localStorage lên để sử dụng chuyển thành JSON
    if (localStorage.getItem("DanhSachNhanVien")) {
        danhSachNhanVien.mangNhanVien = JSON.parse(localStorage.getItem("DanhSachNhanVien"));
        taoBang();
    }
}


function getEle(id) {
    return document.getElementById(id);
}