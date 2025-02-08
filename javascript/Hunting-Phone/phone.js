
console.log('connected');

const loadPhones = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)

    const data = await res.json()
    const phones = data.data
    displayPhones(phones)
}

const displayPhones = phones => {
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container') ;
    phoneContainer.textContent = '' ;

    // const showAllContainer =document.getElementById('show-all-container') ;
    // console.log(showAllContainer);

    const showAllContainer = document.getElementById('show-all-container');
  
    if(phones.length > 12){
      showAllContainer.classList.remove('hidden');
    }else{
      showAllContainer.classList.add('hidd')
    }


    phones = phones.slice(0,12)
    console.log(' pa',phones.length);

    


    phones.forEach(phone => {
       console.log(phone.phone_name);

       // Create a div
       const phoneCard = document.createElement('div')
       phoneCard.classList = `card bg-base-100 w-96 p-10 shadow-xl`;
       phoneCard.innerHTML = `
                    <figure>
                      <img
                        src=${phone.image}
                        alt="Shoes" />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-center my-5">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
       
       
       `
       phoneContainer.appendChild(phoneCard)
    });
}

const handleSearch =() =>{
  console.log('search click');
  const searchInputFiled = document.getElementById('search-input-filed');
  const searchText = searchInputFiled.value
  loadPhones(searchText)
  console.log(searchText);
}

const handleSearch2 =() =>{
  console.log('search click');
  const searchInputFiled = document.getElementById('search-input-filed2');
  const searchText = searchInputFiled.value
  loadPhones(searchText)
  console.log(searchText);
}



// loadPhones()