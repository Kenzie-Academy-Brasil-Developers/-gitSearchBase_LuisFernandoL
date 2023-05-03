
const user = JSON.parse(localStorage.getItem('nameUser'));

export async function repoUsersSearch(login){
    try {
        const data = await fetch (`https://api.github.com/users/${login}/repos`,{
            method:"GET",
        })
        const response = await data.json()
        return response

    }catch(err){
        console.log(err)

    }
}

function createPageProfile (name, repo){

    const containerProfile = document.querySelector('.main__profile')
    const sectonProfile = document.createElement('section');
    
    const hendlePage = document.createElement('div');
    const card = document.createElement('div');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const btnAnotherUser = document.createElement('button')
    
    containerProfile.innerHTML = "";

    const ulRepos = document.createElement('ul');
    img.src = name.avatar_url;
    h2.innerText = name.login;
    btnAnotherUser.innerText = "Trocar usuario";
    
    repo.forEach((element) =>{
        const liRepos = document.createElement ('li');
        const titleRepos = document.createElement ('h2');
        const paragrafRepos = document.createElement('p');
        const btnOpenRepos = document.createElement ('button');
        
        titleRepos.innerText = element.name;
        paragrafRepos.innerText = element.description;
        btnOpenRepos.innerHTML = "Repositório"
        ulRepos.classList.add('ulRepos');
        liRepos.classList.add('liRepos');
        titleRepos.classList.add('titleRepos');
        paragrafRepos.classList.add('paragrafRepos');
        btnOpenRepos.classList.add('btnOpenRepos');
        liRepos.append(titleRepos,paragrafRepos, btnOpenRepos);
        ulRepos.appendChild(liRepos);
    })



    sectonProfile.classList.add('sectonProfile');
    hendlePage.classList.add('hendlePage');
    card.classList.add('card');
    img.classList.add('imgUser');
    h2.classList.add('h2User');
    btnAnotherUser.classList.add('btnAnotherUser');


    card.append(img, h2);
    hendlePage.append(card, btnAnotherUser)


    sectonProfile.append(hendlePage, ulRepos);
    containerProfile.appendChild(sectonProfile);

};


async function profileRender (){
   const repositorios = await repoUsersSearch(user.login);

    createPageProfile(user, repositorios);
    handleUserBack();
};

function handleUserBack (){
    const btnAnother = document.querySelector('.btnAnotherUser')

    btnAnother.addEventListener('click',()=>{
        localStorage.clear();
        location.replace('../../');
    
    })
}

profileRender();
