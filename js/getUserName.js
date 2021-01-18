const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greetingText = document.querySelector(".js-greetingText");

const USER_LS = "currentUserName",
  SHOW_CN = "show";


// 새로고침 시 입력한 이름이 날아가지 않도록 저장하는 함수
function saveName(content){
  localStorage.setItem(USER_LS, content);
}

// 사용자로부터 이름을 입력받았을 경우에 실행되는 함수 showName().
// 폼 태그를 숨기고, 환영문구를 다시 띄운다.
function showName(text){
  form.classList.remove(SHOW_CN);
  greetingText.classList.add(SHOW_CN);
  greetingText.innerText = `Welcome, ${text}!`;
}

// getName()에서 호출된 후 입력받은 값을 이용해 이름을 띄워주는 함수 submitHandler().
function submitHandler(event){
  event.preventDefault();
  const currentValue = input.value;
  showName(currentValue);
  saveName(currentValue);
}
// 이름을 입력받지 않았을 때 실행되는 함수 getName().
// 폼 태그를 띄워 입력받고, submit이 발생하면 submitHandler를 호출한다.
function getName(){
  form.classList.add(SHOW_CN);
  form.addEventListener("submit", submitHandler);
}


//사용자가 이름을 입력하지 않은 경우 폼 태그를 열어 입력받고,
// 이름을 입력받은 후에는 h4 태그를 열어 환영문구를 보여주는 함수
function loadName(){
  const currentName = localStorage.getItem(USER_LS);
  if(currentName === null){
    //이름 입력 안했을 때
    getName();
  } else {
    //이름을 입력했을 때
    showName(currentName);
  }
}

function init(){
  loadName();
}

init();