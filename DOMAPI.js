// DOM API
// Document Object Model (Document = HTML = div, span, input 요소)
// Application Programming Interface (웹이 동작하기 위해 입력하는 프로그래밍 명령)

// 자바스크립트에서 HTML을 제어하기 위한 프로그래밍 명령

// HTML 요소(Element) 1개 검색/찾기 메소드 (가장 먼저 찾은 요소 1개 반환)
const boxEl = document.querySelector(".box");
console.log(boxEl);


// HTML 요소에 적용할 수 있는 메소드!
// event(상황), handler(실행할 함수)를 인수로 넣음
boxEl.addEventListener("click", function () {
    console.log("Clicked!!");
    boxEl.classList.add("active");
    console.log(
        boxEl.classList.contains("active")
    );
    boxEl.classList.remove("active");
    console.log(
        boxEl.classList.contains("active")
    );
});


// HTML 요소(Element) 모두 검색/찾기
// boxEls는 box를 class로 하는 모든 요소들을 담은 유사배열이 됨.
const boxEls = document.querySelectorAll(".box");
console.log(boxEls);


// 여러 개의 요소를 찾았을 때, 찾은 요소들 반복해서 함수 실행!
// 익명 함수를 인수로 추가!

// 첫 번째 매개변수(boxEl): 반복 중인 요소.
// 두 번째 매개변수(index): 반복 중인 번호

boxEls.forEach(function (boxEl, index) {
    boxEl.classList.add(`order-${index + 1}`);
    console.log(index, boxEl);
});


// Getter, 값을 얻는 용도
console.log(boxEl.textContent); // 1


// Setter, 값을 지정하는 용도
boxEl.textContent = 'HEROPY?!';
console.log(boxEl.textContent); // HEROPY?!