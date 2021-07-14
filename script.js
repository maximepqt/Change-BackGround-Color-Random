let nameEl = document.getElementById("p-el");

function changeBackGroundColor() {
    var result           = '#';
    var characters       = 'ABCDEFabcdef0123456789';

    var charactersLength = 22;
    for ( var i = 0; i < 6; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
   }
   console.log(result);

   document.body.style.background = result;
   nameEl.innerText ="Color is : " + result;

}