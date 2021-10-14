function reset() {
  document.getElementById('box').style.transform = "rotate(0deg)";
  document.getElementById('box').style.transition = "0s";
}

function changePage() {
  window.location.replace("change.html")
}

function changeItems() {
  for (let i = 1; i <= 8; i++) {
    document.getElementById(i).innerHTML = localStorage.getItem(i);
  }
}

function weightedRandom(prob) {
  let i, sum=0, r=Math.random();
  for (i in prob) {
    sum += prob[i];
    if (r <= sum) return i;
  }
}

function rotateFunction(){
  reset();
  setTimeout(() => {deg = weightedRandom({2160:0.1, 2205:0.2, 2250:0.2, 2295:0.05, 2340:0.05, 2385:0.3, 2430:0.05, 2475:0.05});
  console.log(deg);
  document.getElementById('box').style.transform = "rotate("+deg+"deg)";
  document.getElementById('box').style.transition = "all ease 5s";
  var element = document.getElementById('mainbox');
  element.classList.remove('animate');
  setTimeout(function(){
    element.classList.add('animate');
  }, 5000);}, 0)
  
}