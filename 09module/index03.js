

let result = 0;

function add(x) {
    result += x;
}

function minus(x) {
    result -= x;    
}


//default방식으로 객체 내보내기
//key 방식 or 향상된 리터럴
/* 객체를 함수를 담는 모형으로 사용할 수 있음 */
export default {a : add, b : minus}

