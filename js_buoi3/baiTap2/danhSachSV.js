function danhSachSV(){
    //thuộc tính mảng chứa nhiều sinh viên
    this.mangSV = [];

    //phương thức thêm sinh viên
    this.themSV = function(sinhVien){
        this.mangSV.push(sinhVien);
    }
}