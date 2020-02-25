console.log("Cybersoft");
/*Biến _ Variable*/
var name = "Cybersoft";
var number = 123;
var status = true; /*or false */
// nếu biến có từ 2 chữ trở lên thì đc viết theo kiểu con lạc đà
var objStudent = {
    // key: value 
    maSV: 123,
    tenSV: "chuoi",
};
var mang = [1, 2, 3, 4]; /* kiểu khai báo mảng */

/*Hằng số */
const PI = 3.14;

/*Câu đkien if else*/
if (true) {
    console.log("Dkien đúng");
} else {
    console.log("Dk sai");
}
/*so sánh === so sánh kiểu dữ liệu để check được kiểu dữ liệu của biến */
if ("1" === 1) {
    console.log("so sanh đúng");
} else {
    console.log("so sanh khong đúng");
}

// Toán tử ba ngôi
// cú pháp:
/*điều kiện ? điều kiện đúng : điều kiện sai */
1 === 1 ? console.log("so sánh đúng") : console.log("so sánh không đúng");

// điều kiện switch case
switch (0) {
    case 0:
        console.log("số 0");
        break;
    case 1:
        console.log("số 1");
        break;
    case 2:
        console.log("số 2");
        break;

    default:
        console.log("default");
        break;
}

/*Mảng*/
var mangChuoi = ["A", "B", "C", "D", "E"];
// cách 1 để lấy từng phần tử
console.log(mangChuoi[2]);
console.log(mangChuoi[4]);
console.log(mangChuoi[3]);
console.log(mangChuoi[1]);
console.log(mangChuoi[0]);
// duyệt mảng
/*cú pháp: for(khởi tạo biến; độ dài mảng; bước nhảy) */
for (var i = 0; i < mangChuoi.length; i++) {
    console.log(i);
}
/*Map */
mangChuoi.map(function (item, index) {
    console.log(item, index);
})
// map tạo ra 1 bản sao của chuổi để chạy và không ảnh hưởng đến bản chính của mảng
/*forEach */
mangChuoi.forEach(function (item, index) {
    console.log(item, index);
})
// forEach duyệt thẳng trên mảng chính
/*Function_ Hàm */
// hàm có 2 loại: hàm không trả về và hàm trả về => return
var num1 = 3;
var num2 = 2;
var num3 = 5;
var num4 = 4;
console.log(num1 + num2);
var tong = num1 + num2; //=>5
var sum = num3 + num4;
console.log("tổng là:" + tong);
console.log("tổng là: " + sum);

function tinhTong() {
    var kq = num1 + num2;
    console.log(kq);
    return kq;
}

var num6 = 10;
tinhTong();
var tongNum6 = num6 + tinhTong();

function tinhTong2() {
    var kq = num3 + num4;
    console.log(kq);
    return kq;
}
tinhTong2();
num7 = 9;
var tongNum7 = num7 + tinhTong2();
function tinhTong3(a, b) {
    var kq = a + b;
    console.log(kq);
    return kq;
}
tinhTong3(1, 7);
tinhTong3(19, 7);
/*
- Hàm không trả về
- Hàm có trả về => return
- Hàm không có tham số
- Hàm có tham số
 */



/*
*DOM
 */
var input = document.getElementById("username").value;
console.log(input);
/**
 * Event Click
 */
// cú pháp: 
// CÁCH 1: dùng onclick
// document.getElementById("btnNhanEmDi").onclick = function(){
//     console.log("hello");
// } //click là 1 hàm có 2 sự kiện

// CÁCH 2: dùng addEventListener 
document.getElementById("btnNhanEmDi").addEventListener("click", function () {
    console.log("hello");
    document.getElementById("idBeforeText").innerHTML = "Nội dung sau khi thay đổi";

})

// // CÁCH 3: sử dụng function là onclick="nhanEmdi()"
// function nhanEmDi(){
//     console.log(123654);
// }

/**
 * Đổi màu 
 */
document.getElementById("btnChangeColor").addEventListener("click", function () {
    console.log("đang đổi màu");
    document.getElementById("idTextColor").innerHTML = "Text sau khi đổi màu";
    document.getElementById("idTextColor").style.color = "red";
    document.getElementById("idTextColor").style.backgroundColor = "green";

})

document.getElementById("clickOn").addEventListener("click", function () {
    document.getElementById("lightOff").src = "./imgs/pic_bulbon.gif";

})

document.getElementById("clickOff").addEventListener("click", function () {
    document.getElementById("lightOff").src = "./imgs/pic_bulboff.gif";

})
// hide text
document.getElementById("btnHideText").addEventListener("click", function () {
    document.getElementById("txtHide").style.display = "none";
})
// disable
// document.getElementById("btnDisable").addEventListener("click", function(){
//     console.log(1);
    
// })
document.getElementById("btnDisable").addEventListener("click", function () {
    console.log(1);
    document.getElementById("btnHideText").innerHTML = "1234";
    document.getElementById("btnHideText").disabled = true;
})

/** *click vào nút login => DOM id
 * kiểm tra điều kiện:
 *  nếu như username === "cybersoft" và password === "cybersoft"
 * => thông báo login thành công
 * ngược lại
 * => thông báo Login không thành công
 */

document.getElementById("btnLogin").addEventListener("click", function () {
    // console.log(12365460);
    var username = document.getElementById("txtusername").value;
    var password = document.getElementById("txtpassword").value;

    //    console.log("cybersoft");
    if (username === "cybersoft" && password === "cybersoft") {
        console.log("thành công");
        // document.getElementById("txtThongBao").style.display = "block";
        // document.getElementById("txtThongBao").innerHTML = "Login Success";
        // document.getElementById("txtThongBao").style.backgroundColor = "blue";
        // document.getElementById("txtThongBao").style.color = "white";
        changeStyleLogin("block", "Login Success", "blue", "white");

    } else {
        console.log("thất bại");
    //     document.getElementById("txtThongBao").style.display = "block";
    //     document.getElementById("txtThongBao").innerHTML = "Login Fail";
    //     document.getElementById("txtThongBao").style.backgroundColor = "red";
    //     document.getElementById("txtThongBao").style.color = "white";
    changeStyleLogin("block", "Login Fail", "red", "white");
    }
})


function changeStyleLogin(display, text, bg, color) {
    document.getElementById("txtThongBao").style.display = display;
    document.getElementById("txtThongBao").innerHTML = text;
    document.getElementById("txtThongBao").style.backgroundColor = bg;
    document.getElementById("txtThongBao").style.color = color;
}
/**
 * Tag Name
 */
document.getElementsByTagName("button")[4];
// console.log(button);

/**
 * className
 */
document.getElementsByClassName("btn")[3];
// console.log(className);

/**
 * querySlector
 */
// mặc định sẽ lấy button đầu tiên
var querySelector = document.querySelector("button");
console.log(querySelector);

/**
 * querySlectorAll
 */
var querySelectorAll = document.querySelectorAll("button");
console.log(querySelectorAll);

/**
 * tinhTien = tongTien * phanTramTip / 100 / soNguoi;
 */
document.getElementById("btnTinhTienTip").addEventListener("click",function(){
    var txtTongTien = document.getElementById("txtTongTien").value;
    var slPhanTramTip = document.getElementById("slPhanTramTip").value;
    var soNguoi = document.getElementById("songuoi").value;
    console.log(txtTongTien, slPhanTramTip,soNguoi);

    var total = (txtTongTien * slPhanTramTip) / 100 / soNguoi;
    console.log(total);
})