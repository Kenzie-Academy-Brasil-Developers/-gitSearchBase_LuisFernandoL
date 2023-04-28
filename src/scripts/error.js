 
 export function renderPageError (){
    const mainError = document.querySelector('.main__error');

    const sectionError = document.createElement('section');
    const divErrorleft = document.createElement('div');
    const h1ErrorLeft = document.createElement('h1');
    const paragraErrorfLeft = document.createElement('p');
    const btnError = document.createElement('button');

    const imgRight = document.createElement('img');

    h1ErrorLeft.innerText = "Ooops!";
    paragraErrorfLeft.innerText = "Não encotramos o usuário que você procurou, vamos tentar novamente.";
    btnError.innerText = "Nova Busca"

    imgRight.src = "../assets/img/alerta.png";

    sectionError.classList.add('sectionError');
    divErrorleft.classList.add('divErrorleft');
    h1ErrorLeft.classList.add('h1ErrorLeft');
    paragraErrorfLeft.classList.add('paragraErrorfLeft');
    btnError.classList.add('btnError');
    imgRight.classList.add('imgRight');

    divErrorleft.append(h1ErrorLeft, paragraErrorfLeft, btnError);
    sectionError.append(divErrorleft, imgRight);
   
    mainError.appendChild(sectionError);
    
 };

 function handleUserBack (){
   const btnAnother = document.querySelector('.btnError')

   btnAnother.addEventListener('click',()=>{
       localStorage.clear();
       location.replace('../../');
   
   })
};

