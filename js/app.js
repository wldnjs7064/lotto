let realNumbers; //전역 변수로 추출된 번호를 저장할 변수 선언

function getNumber() {
  let selectedNumber = [];
  for (let i = 0; i < 6; i++) {
    randomNum = Math.floor(Math.random() * 45 + 1); //1부터 45까지 랜덤한 숫자 6개
    selectedNumber.push(randomNum);
  }
  let bonusNum = Math.floor(Math.random() * 45 + 1); //보너스 숫자 랜덤
  selectedNumber.push(bonusNum);
  return selectedNumber; //배열로 반환
}

function checkField() {
  let input = document.getElementById("inputId").value.trim(); //입력값 앞뒤 공백 제거
  if (!input) {
    alert("번호를 입력해주세요.");
    return false;
  }

  let numbers = input.split(" "); //입력값 공백을 기준으로 분리
  if (numbers.length !== 7) {
    alert("7개의 숫자를 입력해주세요.");
    return false;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 1 || numbers[i] > 45) {
      alert("로또번호는 1부터 45까지만 올 수 있습니다.");
      return false;
    }
  }

  let inputNumbers = numbers.map((num) => parseInt(num)); //문자열 정수로 변환
  let cnt = 0; //맞춘 개수
  for (let i = 0; i < 7; i++) {
    if (realNumbers.includes(inputNumbers[i])) {
      //추출한 변수에 내 당첨번호가 있다면? cnt++
      cnt++;
    }
  }

  let result = "";
  if (cnt === 7) {
    result = "1등 당첨! 당첨금: 2,257,278,282원";
  } else if (cnt === 6) {
    result = "2등 당첨! 당첨금: 75,242,610원";
  } else if (cnt === 5) {
    result = "3등 당첨! 당첨금: 1,454,901원";
  } else {
    result = "꽝!";
  }

  document.getElementById("result2").innerText = `당첨 번호: ${realNumbers.join(
    ", "
  )}, 내 번호: ${input}`;
  alert(result);
  return false;
}

//버튼 클릭 이벤트에 연결
const btn = document.getElementById("buttonId");
const form = document.getElementById("inputForm");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");

//당첨번호 보기 버튼 클릭 시
btn.addEventListener("click", function () {
  realNumbers = getNumber(); //추출된 번호를 전역 변수에 저장
  result1.innerText = realNumbers.join(", ");
});

//검색 버튼 클릭 시
form.addEventListener("submit", function (event) {
  event.preventDefault(); //기본 동작 중지
  checkField();
});
