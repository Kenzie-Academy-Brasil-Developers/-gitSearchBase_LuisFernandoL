
export async function nameUsersSearch(name){
    const nameUser = await fetch (`https://api.github.com/users/${name}`,{
        method:"GET",
    })
    .then(async(res) =>{
        if(res.ok){
      const response = await res.json();
      localStorage.setItem('nameUser', JSON.stringify(response));
      location.replace('./src/pages/profile.html')
      return response
        }else{
            return location.replace('./src/pages/error.html')
        }
    })
   
    return nameUser
}
  
 function renderSearch (){
    const inputSearch = document.querySelector('.inputRight');
    const btnSearch = document.querySelector('.buttonRight'); 

    btnSearch.addEventListener('click', async () =>{
       const nameSearch = inputSearch.value;

       localStorage.setItem('nameSearch', nameSearch)
       const userSearch = await nameUsersSearch(nameSearch)
       console.log(nameSearch)
       return userSearch
    })
   
}

export function indexSearch(){
    const homePage = document.querySelector('.main__section');
    const divLeft = document.createElement('div');
    const divLeftInternal = document.createElement('div');
    const titleLeft = document.createElement('h1');
    const paragrafLeft = document.createElement("p");

    const divRight = document.createElement ('div');
    const divRightInternal = document.createElement ('div');
    const titleRight = document.createElement('h1');
    const paragrafRight = document.createElement("p");
    const inputRight = document.createElement('input');
    const buttonRight = document.createElement('button');

    titleLeft.innerText = "Git Search";
    paragrafLeft.innerText = 'Encontre e se conecte com profissionais de forma rápida e fácil';

    titleRight.innerText = 'Procurar por um usuário';
    paragrafRight.innerText = 'Usuário github';
    buttonRight.innerText = 'Ver perfil do github';

    inputRight.placeholder = "Digite um usuário do github aqui...";
    divLeft.classList.add('divLeft');
    divLeftInternal.classList.add('divLeftInternal');
    titleLeft.classList.add('titleLeft');
    paragrafLeft.classList.add('paragrafLeft');

    divRight.classList.add('divRight');
    divRightInternal.classList.add('divRightInternal');
    titleRight.classList.add('titleRight');
    paragrafRight.classList.add('paragrafRight');
    inputRight.classList.add('inputRight');
    buttonRight.classList.add('buttonRight');

    divLeftInternal.append(titleLeft, paragrafLeft)
    divLeft.appendChild(divLeftInternal);
    divRightInternal.append(titleRight, paragrafRight, inputRight, buttonRight)
    divRight.appendChild(divRightInternal);

    
    homePage.append(divLeft, divRight);
    
}

indexSearch();
renderSearch();
















