///increasing counter
document.addEventListener("DOMContentLoaded", ()=>{
  let isPause = false

  function getCounter(){
    let counter = document.getElementById("counter")
    return parseInt(counter.innerHTML)
  }

  function changeCounter(num=1){
    if( isPause === false ){
      let nextCounter = getCounter() + num
      counter.innerHTML = nextCounter < 0 ? 0 : nextCounter
    }
  }

  setInterval(changeCounter, 1000)

  //////////////

  ////add minus button
  let addButton = document.getElementById("+")
  let minusButton = document.getElementById("-")


  function addCounter(){
    changeCounter()
  }

  function minusCounter(){
    changeCounter(-1)
  }

  addButton.addEventListener("click", addCounter)
  minusButton.addEventListener("click", minusCounter)
  ///////////////////
  ///like////

  let likedObject = {}
  let likeButton = document.getElementById("<3")
  function clickLike(){
    if( isPause === false ){
      let ul = document.querySelector(".likes")
      let li = document.createElement("li")
      let counter = getCounter()
      //counter is key, number of likes is value      {1:2}
      if( likedObject[counter] === undefined ){
        likedObject[counter] = 0
      }
      likedObject[counter] = likedObject[counter] + 1
      likeCount = likedObject[counter]

      li.innerHTML = `${counter} has been liked ${likeCount} time${likeCount>1 ? "s":""}`
      ul.appendChild(li)
    }
  }
  likeButton.addEventListener('click', clickLike)

  let pauseButton = document.getElementById("pause")

  pauseButton.addEventListener("click", function(){
    if( isPause === false ){
      isPause = true
      pauseButton.innerHTML = "resume"
    }else if( isPause === true ){
      isPause = false
      pauseButton.innerHTML = "pause"
    }
  })

  let submitForm = document.getElementById("comment-form")
  submitForm.addEventListener("submit", function(e){
    e.preventDefault()
    let comments = document.getElementById("list")
    let div = document.createElement("div")
    div.innerText = submitForm.elements[0].value
    comments.appendChild(div)
    submitForm.elements[0].value = ""
  })

})















////
