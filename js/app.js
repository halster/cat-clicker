document.addEventListener("DOMContentLoaded", function(){
  start();
});

function start(){

  function Cat(name, url, alt){
    this.name=name;
    this.url=url;
    this.alt=alt;
    this.counter=0;
  }

  const cat1= new Cat('Stanley','img/kitten.jpg', 'gray kitten');
  const cat2= new Cat('Fred', 'img/blue-eyed-cat.jpg', 'blue eyed cat');

  let cats=[cat1, cat2];
  makeSpans(cats);
  let allCatsImg=document.querySelectorAll('.catBox');
  console.log(allCatsImg);
  init(allCatsImg, cats);
}

function makeSpans(cats){
  const mycats = document.querySelector('.cats');
  for(let cat of cats){
    const newCatEl= document.createElement('span');
    newCatEl.innerHTML = '<h2> '+cat.name +' </h2> <img class = "catBox" id="' +cat.name+ '" src="'+cat.url+'" alt="'+cat.alt+'">';
    const catPar= document.createElement('p');
    catPar.innerHTML = ' you have clicked ' +cat.name+' <span class="'+cat.name+'Count"> 0 </span> times';
    newCatEl.appendChild(catPar);
    mycats.appendChild(newCatEl);
  }
}

function init(allCatsImg, cats){
  allCatsImg.forEach(function(img){
     img.addEventListener('click', increaseCount())
  });
}

function increaseCount(){
  this.counter+=1;
  console.log(this.counter);
  updatePage(this.counter);
}

function updatePage(counter){
document.querySelector('.StanleyCount').innerText=this.counter;
}



// document.querySelector("#reset").addEventListener('click', reset)
