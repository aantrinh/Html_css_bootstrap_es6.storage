// đầu vào
var diemToan = 5;
var diemLy = 8;
var diemHoa = 9;
// xử lý
var tongdiem = diemToan + diemLy + diemHoa;
function tinhDTB(){
    var dtb = tongdiem/3;
    return dtb;
}
var diemTB = tinhDTB();
// đầu ra
function xepLoai(){
    if(diemTB >= 9 && diemTB <=10 ){
        console.log("xuất sắc");
    }else if (diemTB >= 8) {
        console.log("Giỏi");
    }else if (diemTB >= 7) {
        console.log("khá");
    }else if (diemTB >=6){
        console.log("Trung Bình Khá");
    }else if (diemTB >= 5){
        console.log("Trung Bình");
    } else{
        console.log("yếu");
    }

}
xepLoai();
