//사용할 변수
let ran = 0;
let count = 1;

//윈도우가 로드된 후 실행하기위함.
$( function () {
    /*
    // 원하는 객체 불러오기
    const startButton = document.querySelector("#start_button"); // 시작버튼
    const gameForm = document.querySelector("#game_form"); // 입력받는 form(submit)
    gameForm.firstElementChild.disabled = true;
    gameForm.lastElementChild.disabled = true;

    // 원하는 객체에 이벤트 리스너 호출
    startButton.addEventListener('click', gameStart);
    gameForm.addEventListener('submit', gameCheck);
    //form요소는 submit 이벤트를 이용하여 함수를 실행
    */
    $("#start_button").on("click", function() {
        // const r = Math.floor( Math.random()*256); 0~255
        // rgb( r, g, b);
        // start_button의 css의 backgroundColor 값 랜덤하게 바꾸기
        const r = Math.floor( Math.random()*256);
        const g = Math.floor( Math.random()*256);
        const b = Math.floor( Math.random()*256);

        $("#start_button").css("backgroundColor",`rgb(${r},${g},${b})`);
        // 메소드나 함수로 전달해 주는 것은 항상 값(문자열, 숫자, boolean)
        // 변수를 넣으면 변수의 값,, 함수를 넣으면 함수의 결과 값이 전달

        ran = Math.floor(Math.random()*100+1) ; // 랜덤한 수 생성
        count = 1;
        // 입력받는 form(submit)
        $("#game_form").children().prop("disabled",false);
        // explan의 내용 수정
        $("#explan").text("게임이 시작되었습니다. 1~100사이의 수를 입력하세요");
    });

    $("#game_form").on("submit",function(event) {
        event.preventDefault();
        const usernum = $("#user_num").prop("value");
        //attr() 문서에 이미 작성된 고정값
        //prop() 바뀌는 값

        //if문을 이용해서 DOM의 값 수정
        if( ran > usernum ) {
            $("#explan").text(`${usernum}보다 더 크다`);
        }
        else if (ran<usernum) {
            $("#explan").text(`${usernum}보다 더 작다`);
        }
        else if (ran==usernum) {
            $("#explan").text(`${usernum}! 정답!`);
            $("#game_form").children().prop("disabled",false);

            const name = prompt("이름을 입력해 주세요");
            $("#log").append($("<li>").text(`${name}님 ${count++}회 성공`) );
        }
        $("#start_button").text("재시작");
        $("#result").text(`${count++}회 시도하였습니다`);
        $("#user_num").prop("value","");
    });
    $("#game_form").children().prop("disabled",true);
}) 

// 게임 시작
// 랜덤 숫자를 할당하고 count값 및 창의 내용 초기화
function gameStart () {
    ran = Math.floor(Math.random()*100+1) ; // 랜덤한 수 생성
    count = 1;

    /*
    // 입력받는 form(submit)
    const gameForm = document.querySelector("#game_form"); 
    gameForm.firstElementChild.disabled = false;
    gameForm.lastElementChild.disabled = false;
    */
    
    $("#game_form").children().prop("disabled",false);

    /*
    // explan의 내용 수정
    const explan = document.querySelector("#explan");
    explan.textContent = "게임이 시작되었습니다. 1~100사이의 수를 입력하세요";
    */
    $("#explan").text("게임이 시작되었습니다. 1~100사이의 수를 입력하세요");
}

//랜덤 숫자와 입력된 값 확인
function gameCheck(e) {
    //submit으로 들고오면 창 새로고침이 발생
    e.preventDefault();

    /*
    //DOM들고오기
    const explan = document.querySelector("#explan");
    const userNum = document.querySelector("#user_num");
    const result = document.querySelector("#result");

    //DOM의 값으로 ran값 비교
    const userNumValue = userNum.value;
    */
    
    const usernum = $("#user_num").prop("value");

    //if문을 이용해서 DOM의 값 수정
    if( ran > usernum ) {
        $("#explan").text(`${usernum}보다 더 크다`);
        //explan.textContent = `${usernum}보다 더 크다`;
    }
    else if (ran<usernum) {
        $("#explan").text(`${usernum}보다 더 작다`);
        //explan.textContent = `${usernum}보다 더 작다`;
    }
    else if (ran==usernum) {
        $("#explan").text(`${usernum}! 정답!`);
        //explan.textContent = `${usernum}! 정답!`;
        //userNum.disabled = true;
        //userNum.nextElementSibling.disabled = true;
        $("#game_form").children().prop("disabled",false);

        // 정답자 이름 기록 코드 >> html에 <ul id="log"></ul> 추가
        // prompt를 열어서 이름 입력
        const name = prompt("이름을 입력해 주세요");

        // 새로운 노드 생성하여 ul안에 li로 이름과 횟수(count) 기록 
        //const li = document.createElement("li");
        //document.querySelector("#log").appendChild(li);
        //li.textContent = `${name}님 ${count++}회 성공`;
        $("#log").append($("<li>").text(`${name}님 ${count++}회 성공`) );


    }
    //const startButton = document.querySelector("#start_button");
    //startButton.textContent = "재시작";
    $("#start_button").text("재시작");
    
    $("#result").text(`${count++}회 시도하였습니다`);
    //document.querySelector("#result").textContent = `${count++}회 시도하였습니다`;
    //userNum.value = "";
    $("#user_num").prop("value","");
    }
