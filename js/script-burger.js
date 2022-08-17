const ul=document.querySelector('.header__list')
const body=document.querySelector('body')
const divv=document.createElement('div')
const burger=document.querySelector('.header__burger')
const mainAction=document.querySelector('.main__action')


burger.addEventListener('click',()=>{
    ul.appendChild(div)
})

if(body.classList.contains('lock')){
    divv.classList.add('none')
}
else{
    
}