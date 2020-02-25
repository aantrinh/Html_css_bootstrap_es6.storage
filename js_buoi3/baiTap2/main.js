var listSV = new danhSachSV();


function themSinhVien(){
    // console.log(321);
    

    // DOM tới từng ô input để lấy value
    var maSV = getEle("txtMaSV").value;
    var tenSV = getEle("txtTenSV").value;
    var loaiSV = getEle("loaiSV").value;
    var diemToan = getEle("txtDiemToan").value;
    var diemLy = getEle("txtDiemLy").value;
    var diemHoa = getEle("txtDiemHoa").value;
    var diemRenLuyen = getEle("txtDiemRenLuyen").value;


    var sinhVien = new SinhVien(maSV, tenSV, loaiSV, diemToan, diemLy, diemHoa, diemRenLuyen);
    // console.log(sinhVien);
    listSV.themSV(sinhVien);
    console.log(listSV.mangSV);
    taoBang();
}



function taoBang(){
    var tbody = document.getElementById("tbodySinhVien");
    tbody.innerHTML = ""; // tạo thuộc tính này để mỗi lần duyệt lại mảng không bị double sinh viên

    // duyệt mảng sinh viên bằng vòng lặp for
    for (let i = 0; i < listSV.mangSV.length; i++) {
        // const element = array[i];
        // tạo thẻ tr 
       var tagTR =  document.createElement("tr");
       var tagTDMaSV = document.createElement("td");
       var tagTDTenSV = document.createElement("td");
       var tagTDLoaiSV = document.createElement("td");
       var tagTDDiemTB = document.createElement("td");
       var tagTDDiemRL = document.createElement("td");

       tagTDMaSV.innerHTML = listSV.mangSV[i].maSV;
       tagTDTenSV.innerHTML = listSV.mangSV[i].tenSV;
       tagTDLoaiSV.innerHTML = listSV.mangSV[i].loaiSV;
       tagTDDiemTB.innerHTML = listSV.mangSV[i].diemTB();
       tagTDDiemRL.innerHTML = listSV.mangSV[i].diemRenLuyen;

       tagTR.appendChild(tagTDMaSV);
       tagTR.appendChild(tagTDTenSV);
       tagTR.appendChild(tagTDLoaiSV);
       tagTR.appendChild(tagTDDiemTB);
       tagTR.appendChild(tagTDDiemRL);
        

       tbody.appendChild(tagTR);


    }

}
function getEle(id){
   return document.getElementById(id);
}