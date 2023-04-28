//Que é um API de comunicação e fala e sabe oq é falado
var SpeechRecognition = window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();

  //Começa o reconhecimento
 function start()
{
    document.getElementById("textbox").innerHTML = "Vai aparecer o q vc fala aqui:"; 
    recognition.start();
} 
//mostra os resultado no console e pega oq tu falou na tela 
recognition.onresult = function run (event) 
{
 console.log(event); 
var Content = event.results[0][0].transcript;
console.log(Content);
document.getElementById("textbox").innerHTML = Content;
if (Content == "Eu quero uma surpresa") {
  fala ();
}
}
//Ensinandes computadores a falares
function fala () {
  var synth = window.speechSynthesis;
  // fuga_das_galinhas = document.getElementById("textbox").value;
  fuga_das_galinhas = "eu estou te observando. kkkkkkkkkk zueira é só a tua webcam. otário, tu realmente caiu nessa kkkkkkkkk"
   var utterthis=new SpeechSynthesisUtterance(fuga_das_galinhas);
   synth.speak(utterthis);
   Webcam.attach (camera);
   setTimeout(function (){
    Tirafoto ();
    salvar ();
   },5000);
  }
  camera = document.getElementById ("camera");
  Webcam.set({
    width:361,
    height:249,
    image_format:"jpeg",
    jpeg_quality:91


  });
  function Tirafoto () {
    Webcam.snap(function(data_uri) {
      document.getElementById("result").innerHTML = '<img id="mygoxi" src="'+data_uri+'"/>';
  });
  }
  function salvar () {
    link = getElementById("link");
    image = document.getElementById ("mygoxi").src
    link.href = image;
    link.click ();
  }