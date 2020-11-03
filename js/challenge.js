document.addEventListener("DOMContentLoaded", () => {
    // your code here

    // startCounterTimer();
    mountCounterIncrementer();
    mountFormListener();
    startCounterTimer();
    mountPause();


  });

  const counter = document.querySelector("#counter");
  const plusButton = document.querySelector("#plus");
  const minusButton = document.querySelector("#minus");
  let counterValue = parseInt(counter.innerText);
  let timerInterval

  function startCounterTimer() {
    timerInterval =  setInterval(() => {
        counter.innerText = ++counterValue
    }, 1000);
    
  }

  function mountCounterIncrementer() {
    plusButton.addEventListener("click", (e) => {
        counter.innerText = ++counterValue
    });

    minusButton.addEventListener("click", function(e) {
        counter.innerText = --counterValue
    });
  };

  function getPostData(f) {
    return {
      data: f.querySelector("#comment-input").value
    };
  };

  function mountFormListener() {
    const postForm = document.querySelector("#comment-form");
    postForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const postObj = getPostData(event.target);
      const commentList = document.querySelector("#list");
      const commentToBeAdded = document.createElement('li');
      commentToBeAdded.innerHTML = postObj.data;
      commentList.appendChild(commentToBeAdded);
      postForm.reset();
    });
  ;}

  let flag = true

  function mountPause(){
    const pauseBtn = document.querySelector("#pause");
    pauseBtn.addEventListener("click", function(e){
        if(e.target.innerText === "pause"){
            clearInterval(timerInterval)
            e.target.innerText = "resume"
        }else{
            startCounterTimer() 
            e.target.innerText = "pause"
        }
        
    })
  }
