var t = ['', '', '', '', '', '', '', '', ''];

function ai() {
  let o = true;
  while (o)
  {
let rand = Math.random();
    rand = Math.floor(rand * 9);
    if (t[rand] === '')
    {
      document.querySelectorAll("p")[rand].classList.add("o");
      t[rand] = 'ai';
      o = false;

    }
    else   if (t[0] != '' && t[1] != '' && t[2] != '' && t[3] != '' && t[4] != '' &&
          t[5] != '' && t[6] != '' && t[7] != '' && t[8] != '')
    {
      o = false;

    }
  }
}

function tellWinner(win) {
  if (win === "pc")
  {
    document.querySelectorAll("h1")[0].textContent = "Computer wins😥"
        t = ['.', '.', '.', '.', '.', '.', '.', '.', '.'];
  }

  if (win === "pl")
  {
    document.querySelectorAll("h1")[0].textContent = "You win🔥"
        t = ['.', '.', '.', '.', '.', '.', '.', '.', '.'];
  }

  if (win === "dr")
  {
    document.querySelectorAll("h1")[0].textContent = "📌Draw📌"
        t = ['.', '.', '.', '.', '.', '.', '.', '.', '.'];
  }
}

function checkEnd() {
  if (t[0]=='ai' && t[1]=='ai' && t[2]=='ai' ){
  tellWinner("pc");
}
  if (t[0]=='player' && t[1]=='player' && t[2]=='player'){
  tellWinner("pl");
}
  if (t[3]=='ai' && t[4]=='ai' && t[5]=='ai' ){
  tellWinner("pc");
}
  if ( t[3]=='player' && t[4]=='player' && t[5]=='player'){
  tellWinner("pl");
}
  if (t[6]=='ai' && t[7]=='ai' && t[8]=='ai' ){
  tellWinner("pc");
}
  if ( t[6]=='player' && t[7]=='player' && t[8]=='player'){
  tellWinner("pl");
}
  if (t[0]=='ai' && t[3]=='ai' && t[6]=='ai' ){
  tellWinner("pc");
}
  if ( t[0]=='player' && t[3]=='player' && t[6]=='player'){
  tellWinner("pl");
}
  if (t[1]=='ai' && t[4]=='ai' && t[7]=='ai' ){
  tellWinner("pc");
}
  if ( t[1]=='player' && t[4]=='player' && t[7]=='player'){
  tellWinner("pl");
}
  if (t[2]=='ai' && t[5]=='ai' && t[8]=='ai' ){
   tellWinner("pc");
}
  if ( t[2]=='player' && t[5]=='player' && t[8]=='player'){
  tellWinner("pl");
}
  if (t[0]=='ai' && t[4]=='ai' && t[8]=='ai' ){
  tellWinner("pc");
}
  if ( t[0]=='player' && t[4]=='player' && t[8]=='player'){
  tellWinner("pl");
}
  if (t[2]=='ai' && t[4]=='ai' && t[6]=='ai' ){
  tellWinner("pc");

}
  if ( t[2]=='player' && t[4]=='player' && t[6]=='player'){
  tellWinner("pl");

}
  if ((t[0] != '' && t[1] != '' && t[2] != '' && t[3] != '' && t[4] != '' &&
      t[5] != '' && t[6] != '' && t[7] != '' && t[8] != '') &&
      (t[0] != '.' && t[1] != '.' && t[2] != '.' && t[3] != '.' && t[4] != '.' &&
          t[5] != '.' && t[6] != '.' && t[7] != '.' && t[8] != '.')
    ){
  tellWinner("dr");


}
}


document.querySelectorAll("p")[0].addEventListener("click", function (){
  if (t[0] === '')
  {
  document.querySelectorAll("p")[0].classList.add("x");
  t[0] = 'player';
  checkEnd();
  ai();
  checkEnd();
    }
}
  );
document.querySelectorAll("p")[1].addEventListener("click", function (){
  if (t[1] === '')
  {
  document.querySelectorAll("p")[1].classList.add("x");
  t[1] = 'player';
  checkEnd();
  ai();
  checkEnd();
    }
}
  );
document.querySelectorAll("p")[2].addEventListener("click", function (){
  if (t[2] === '')
  {
  document.querySelectorAll("p")[2].classList.add("x");
  t[2] = 'player';
  checkEnd();
  ai();
  checkEnd();
    }
}
  );
document.querySelectorAll("p")[3].addEventListener("click", function (){
  if (t[3] === '')
  {
  document.querySelectorAll("p")[3].classList.add("x");
  t[3] = 'player';
  checkEnd();
  ai();
  checkEnd();
    }
}
  );
document.querySelectorAll("p")[4].addEventListener("click", function (){
  if (t[4] === '')
  {
  document.querySelectorAll("p")[4].classList.add("x");
  t[4] = 'player';
  checkEnd();
  ai();
  checkEnd();
    }
}
  );
document.querySelectorAll("p")[5].addEventListener("click", function (){
  if (t[5] === '')
  {
  document.querySelectorAll("p")[5].classList.add("x");
  t[5] = 'player';
  checkEnd();
  ai();
  checkEnd();
    }
}
  );
document.querySelectorAll("p")[6].addEventListener("click", function (){
  if (t[6] === '')
  {
  document.querySelectorAll("p")[6].classList.add("x");
  t[6] = 'player';
  checkEnd();
  ai();
  checkEnd();
    }
}
  );
document.querySelectorAll("p")[7].addEventListener("click", function (){
  if (t[7] === '')
  {
  document.querySelectorAll("p")[7].classList.add("x");
  t[7] = 'player';
  checkEnd();
  ai();
  checkEnd();
    }
}
  );
document.querySelectorAll("p")[8].addEventListener("click", function (){
  if (t[8] === '')
  {
  document.querySelectorAll("p")[8].classList.add("x");
  t[8] = 'player';
  checkEnd();
  ai();
  checkEnd();
    }
}

  );
