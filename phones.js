const phoneLoader = async(searchValue) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data.data)
    phoneShowsing(data.data)
}

const phoneShowsing = phones =>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    phones = phones.slice(0, 9);
    const loadMessage = document.getElementById('warning-msg')
    if(phones.length === 0){
        loadMessage.classList.remove('d-none')
    }else{
        loadMessage.classList.add('d-none')
    }
    // console.log(phones)
    phones.forEach(phone => {
        console.log(phone)
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML=`
        <div class="card p-4 m-4">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${phone.brand}</h5>
              <p class="card-text">${phone.phone_name}</p>
              <p class="card-text">${phone.slug}</p>
            </div>
          </div>
        `
        phoneContainer.appendChild(phoneDiv);
    
    });

}

document.getElementById('search-btn').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    // console.log(searchValue)
    phoneLoader(searchValue)
})

phoneLoader('iphone')