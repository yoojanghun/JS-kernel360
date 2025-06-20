// 조건문 : 조건의 결과(true, false)에 따라 다른 코드를 실행하는 구문
// if, else

let isShow = true;
let checked = false;


// if (조건) {
//     참일때만 실행됨
// }

if (isShow) {
    console.log("Show!!")
};

if (checked) {
    console.log("checked")
};


// if (조건) {
//     참일때만 실행됨
// } else {
//     거짓일 때만 실행됨
// }

isShow = false;

if (isShow){
    console.log("True!!")
} else {
    console.log("False!!")
};