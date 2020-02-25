// import{total} from "./test.js";
// import default
import {total,tinhTong} from "./test.js";
console.log("Tinh tong: " , tinhTong);
console.log("Tinh tong: " , tinhTong());

// su khac biet giua var vs let

var a = 1;
var a = 10;


let b = 2;
b = 20; // khi muon update data thi chi can goi lai bien va gan gia tri cho no la dc :)))


const c = 3;
const e = 1;

function foo(){
    var x = 10;
    if (true){
       var x = 20;
       console.log(x);
    }
    console.log(x);
}
foo();

function foo2(){
    let x = 10;
    if(true){
      let x = 20;
        console.log(x);
    }
    console.log(x);
}
foo2();

// for(var i =0; i<4; i++){
//     console.log(i);
// }
// console.log(i);

// for(let i =0; i<4; i++){
//     console.log(i);
// }
// console.log(i);

// number = 10;
// var number;
console.log(number);
var number = 10;
/*Function */
function test(){
}
function test2(){
    return 10;
}

/*Arrow Function */
let test1 = (name,number) => {
    console.log("hello" + name + "" + number);
};

let test3 = () => 10;
// console.log(test3);

test1("cybersoft",123);
let hocVien = {
    hoTen : "Nguyen Van A",
    lop: "FE 32",

    layThongTinNhanVien: function(){
        console.log(this);
        let _blind = this;
        function hienThiThongTin(){
            console.log(`Ho Ten: ${_blind.hoTen} - lop: ${_blind.lop}`);
        }
        hienThiThongTin();
    }
};
hocVien.layThongTinNhanVien();

let hocVien2 = {
    hoTen: "Nguyen Van C",
    lop: "FE32",

    layThongTinNhanVien: function(){
        let hienThiThongTin = () =>{
            console.log(`Ho Ten: ${this.hoTen} - lop: ${this.lop}`)
        };
        hienThiThongTin();
    }
};

hocVien2.layThongTinNhanVien();

/* Rest Params */
function sum(...numbers){
    // let tong = 0;
    // numbers.map((item, index) => {
    //     tong += item;
    // });
    // console.log(tong);

    return numbers.reduce((a, b) => {
        return a +b;
    }, 0);
}
let kq = sum(1,2,3,4,5,6,7);
console.log(kq);

/*
 * Spread Operator
 */
// let mangA = [1,2,3];
// let mangB = mangA;

// mangB.push(4);
// mangB.push(5);
// // mangA dang bi tham chieu tu mangB
// console.log(mangA); //1 2 3 4 5
// console.log(mangB); //1 2 3 4 5 

let mangA = [1,2,3];
// copy mangA thanh 1 ban sao de them bot gia tri va khong anh huong den mangA chinh
let mangB = [...mangA, 4, 5];

// mangA dang bi tham chieu tu mangB
console.log(mangA); //1 2 3 4 5
console.log(mangB); //1 2 3 4 5 

let object = {
    ten: "anht",
    tuoi: "21"
};
let object2 = {...object, lop: "FE32"};
console.log(object);
console.log(object2);
// tham tri chi bi anh huong boi mang va con so

/*Default Params */
let getInfo = (name = "Anht", age ="21") => {
    console.log(name, age);
};
getInfo("minh", 23);

/**
 * Destructuring: bóc, táchtách
 */
let mangC = [1,2];

let [x,y] = mangC;
console.log(x,y);

let people = {
    name: "anht",
    age: 21
};
let {name, age} = people;
console.log(name, age);

/*Template Strings */
let ten = "anht";
let result = "Hello" + ten; // cong chuoi truyen thong
let result2 = `Hello guys ${ten}`; // Template Strings

/**Object literals (object chân phương) */
let hoTen = "anht";
let lop = "FE32";
//chân phương nghĩa là đơn gỉan
let objectPeople = {
    hoTen, // hoTen: hoTen
    lop //lop: loplop
};
// cách 2
let proHoTen = "hoTen";
let proLop = "lop";

let proObjectPeople = {
    [proHoTen]: "anht",
    [proLop]: "fe32"
};
console.log(proObjectPeople);

/**For...in || for...of : duyệt mảng theo số chỉ mục||theo giá trị của mảng*/
let listFriend = ["hoa", "lan", "cuc", "truc"];
for (let index in listFriend) {
    console.log(index);  
}
for (let item of listFriend){
    console.log(item);
}