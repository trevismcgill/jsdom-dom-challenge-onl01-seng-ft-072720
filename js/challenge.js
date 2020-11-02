document.addEventListener("DOMContentLoaded", () => {
    // your code here

    // startCounterTimer();
    mountCounterIncrementer();
    mountFormListener();

  });

  const counter = document.querySelector("#counter");
  const plusButton = document.querySelector("#plus");
  const minusButton = document.querySelector("#minus");
  let counterValue = parseInt(counter.innerText);

//   function startCounterTimer() {
//     const timer = 
    
//   }

  function mountCounterIncrementer() {
    plusButton.addEventListener("click", function(e) {
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
