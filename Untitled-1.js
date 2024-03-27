let phoneLoaderFun = async(searchValue) =>{
    let url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    let res = await fetch(url)
    let bata = await res.json()
    phoneDisplayZone(bata.data)
}

let phoneDisplayZone = phones =>{
    let phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    phones = phones.slice(0, 9);
    const loadMessage = document.getElementById('warning-msg')
    if(phones.length === 0){
        loadMessage.classList.remove('d-none');
    }else{
        loadMessage.classList.add('d-none');
    }
    phones.forEach(phone => {
        console.log(phone);
        let individualPhone = document.createElement('div');
        individualPhone.classList.add('col')
        individualPhone.innerHTML=`
        <div class="card p-4 m-4">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${phone.brand}</h5>
              <p class="card-text">${phone.phone_name}</p>
              <p class="card-text">${phone.slug}</p>
            </div>
          </div>
        `
        phoneContainer.appendChild(individualPhone)
    });
    toggleSpinner(false);
}

document.getElementById('search-field').addEventListener('keydown', function(){
    let searchTextField = document.getElementById('search-field');
    let searchValue = searchTextField.value;
    phoneLoaderFun(searchValue)
})

document.getElementById('search-btn').addEventListener('click', function(){
    toggleSpinner(true);
    let searchTextField = document.getElementById('search-field');
    let searchValue = searchTextField.value;
    phoneLoaderFun(searchValue)
})


let toggleSpinner = isLoading =>{
    let loadSpinner = document.getElementById('spinner-load');
    if(isLoading){
        loadSpinner.classList.remove('d-none');
    }else{
        loadSpinner.classList.add('d-none');
    }
}

phoneLoaderFun('iphone')  