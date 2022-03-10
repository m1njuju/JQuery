const clock = document.querySelector("#clock");

//시간의 값을 문자열로 반환하는 함수
function getClock() {
    const date = new Date();
    // 숫자값으로 받아오면 일의 자리수는 한자리로 표현
    // 1 >> 01 padStart(); >> String 객체에서 사용가능
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    return `${hours}:${minutes}:${seconds}`;
}

/*
function getClockInnerHTML() {
    clock.innerHTML = getClock();
}
*/

//처음 한번 출력
clock.innerHTML = getClock();
//이후 화살표함수로 값을 넣어줌
setInterval( ()=> {$("#clock").text( getClock() )} , 1000);