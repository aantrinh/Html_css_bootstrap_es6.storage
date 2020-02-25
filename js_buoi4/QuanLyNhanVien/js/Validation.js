function Validation() {
    this.checkMaTrung = function (input, spanId, message, mangNhanVien) {
        /**
         * 1.duyet mang
         * 2.so sanh input co trung MaNV trong mang khong
         * 3.Neu nhu input trung maNV trong mang => return false
         * 4. nguoc lai => return true
         */
        var check = mangNhanVien.some(function (item) {
            return input === item.maNV;
        });
        console.log(check);
        if (check === true) {
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = message;
            return false;
        }

        getEle(spanId).style.display = "none";
        getEle(spanId).innerHTML = "";
        return true;

    };
    this.kiemTraRong = function (input, spanId, message) {
        if (input === "") {
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = message;
            return false;
        } else {
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
        }
    }

    this.kiemTraDoDaiKyTu = function (input, spanId, message, min, max) {
        if (input.length >= min && input.length <= max) {
            // hợp lệ
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
        }
        //không hợp lệ
        getEle(spanId).style.display = "block";
        getEle(spanId).innerHTML = message;
        return false;
    }

    this.kiemTraChucVu = function (id, spanId, message) {
        if (getEle(id).selectedIndex !== 0) {
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
        }
        getEle(spanId).style.display = "block";
        getEle(spanId).innerHTML = message;
        return false;
    }
    this.checkEmail = function (input, spanId, message) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (input.match(mailformat)) {
            // hợp lệ
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
        }
        // không hợp lệ
        getEle(spanId).style.display = "block";
        getEle(spanId).innerHTML = message;
        return false;
    }
    this.kiemTraChuoi = function (input, spanId, message) {
        var pattern = new RegExp(

            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +

            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +

            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"

        );
        if (pattern.test(input)) {
            // hợp lệ
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
        }
        // ko hợp lệ
        getEle(spanId).style.display = "block";
        getEle(spanId).innerHTML = message;
        return false;
    }
}