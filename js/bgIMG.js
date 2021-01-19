const body = document.querySelector("body");

const BG_IMG_NO = 5;

function showBG(bgNum){
  const image = document.createElement("img");
  // const image = new Image();   이렇게해도 된다는데 이건 무슨 구문인지 모르겠음. 객체생성?
  image.src = `images/${bgNum}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function generateRdNum(){
  const number = Math.ceil(Math.random() * BG_IMG_NO);
  return number;
}

function init(){
  const rdNum = generateRdNum();
  showBG(rdNum);
};

init();