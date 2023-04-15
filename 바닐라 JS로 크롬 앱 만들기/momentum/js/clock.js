
// index.html 파일의 h2요소이고 id가 clcok인 녀석을 불러와 상수 clock에 저장.
const clock = document.querySelector("h2#clock");


// getClock라는 이름의 함수 선언
function getClock(){
    const date = new Date(); // 날짜를 불러와 상수 date에 저장.

    //시간을 불러온 후 문자로 바꿔주고 padStart(2,"0")으로 한자릿수 일때 0을 집어넣어 최소 두자릿수로
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    //==================================================================================
    
    // date의 시간 분 초를 불러와 clock의 텍스트에 집어넣는다.
    clock.innerText = (`${hours}:${minutes}:${seconds}`)
} 

// setInterval(a,b) = b초마다 a를 실행
// setTimeout(a,b) = b초 후에 a를 실행

getClock(); // 새로고침하거나 페이지를 열면 실행
setInterval(getClock, 1000); // 1000ms(1초) 마다 실행