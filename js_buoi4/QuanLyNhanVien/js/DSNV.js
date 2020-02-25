function DanhSachNhanVien() {
    this.mangNhanVien = [];

    this.themNhanVien = function (NhanVien) {
        this.mangNhanVien.push(NhanVien);
    }
    this.xoaNhanVien = function (maNV) {
        /**
         * 0.tạo 1 biến viTri = -1;
         * 1. duyệt mảng
         * 2. nếu maNV === item.MaNV
         * 3.viTri = index;
         * 4.array.splice(viTri, 1);
         */
        var viTri = this.timViTri(maNV);


        if (viTri !== -1) {
            this.mangNhanVien.splice(viTri, 1);
        }
    };

    this.timViTri = function (maNV) {
        var viTri = -1;
        this.mangNhanVien.map(function (item, index) {
            if (maNV === item.maNV) {
                viTri = index;
            }
        });
        return viTri;
    };


}


// chức năng prototype trong javascript 
DanhSachNhanVien.prototype.layThongTinNguoiDung = function (maNV) {
    var viTri = this.timViTri(maNV);
    return this.mangNhanVien[viTri];
}
DanhSachNhanVien.prototype.capNhatThongTinNguoiDung = function (NhanVien) {
    var viTri = this.timViTri(NhanVien.maNV);

    if(viTri !== -1){
        this.mangNhanVien[viTri] = NhanVien;
    }
};
DanhSachNhanVien.prototype.timNhanVien = function(chuoiTimKiem){
    /**
     * 0. tạo ra mảng rỗng mangTimKiem = [];
     * 1. duyệt mảng
     * 2. nếu chuoiTimKiem tồn tại trong mảng
     * 3. mangTimKiem.push nhân viên dc tìm thấy
     * 4. trả về mangTimKiem
     */

     var mangTimKiem = [];
     this.mangNhanVien.map(function(item){
        //  thay === bằng hàm indexOf của JavaScript
        // if(chuoiTimKiem === item.hoTen){
        //     mangTimKiem.push(item)
        // }
        if(item.hoTen.toLowerCase().indexOf(chuoiTimKiem.toLowerCase()) > -1 ){
            mangTimKiem.push(item)
        }
     });
     return mangTimKiem;
};
