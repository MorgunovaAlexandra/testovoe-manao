
let form=document.getElementById('form');
let namee=document.getElementById("name");
let email=document.getElementById('email');
let textAria=document.getElementById('textaria');
let consult=document.getElementById('konsult');
let tarif=document.getElementById('tarif');
let access=document.getElementById('access');
let div = document.createElement('div');

let answer={
    name:null,
    email:null,
    description:null,
    consultacia:false,
    tarif:false,
    access:false
}
form.addEventListener("submit", function(event) {

    answer.name=namee.value;
    answer.email=email.value;
    answer.description=textAria.value;
    answer.consultacia=consult.checked;
    answer.tarif=tarif.checked;
    answer.access=access.checked;
    console.log(answer);

    div.innerHTML = "Спасибо, ваша заявка принята";
    div.classList.toggle("popup");
    document.body.append(div);
    namee.value=null
    textAria.value=null
    
    

   if(div.classList.contains("popup")){

    document.addEventListener('click',(e)=>{
       e.target.classList.value=='popup'?null:div.style.display='none'
    })
   }
    event.preventDefault();
  });

  

const anchors = document.querySelectorAll('a[href*="#"]')
 for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
     e.preventDefault()
       const blockID = anchor.getAttribute('href').substr(1)
       document.getElementById(blockID).scrollIntoView({
       behavior: 'smooth',
       block: 'start'
     })
   })
 }