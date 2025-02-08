// function loadPost (){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => displayPost(data))
// }

// const loadPost1 = async () => {
//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//         const data = await res.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// function displayPost(posts){
//     // console.log(posts);
//     const postContainer = document.getElementById('postContainer')
//     for(let post of posts ){
//         console.log(post.body);
//         const div = document.createElement('div');
//         div.classList.add('post');
//         div.innerHTML = `
//             <h5>User : ${post.id}</h5>
//             <h2>Post-tittle: ${post.title}</h2>
//             <p>Post Description : ${post.body} </p>
//         `
//         postContainer.appendChild(div);

//     }
// }

// loadPost()




const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    const showAllContainer = document.getElementById('show-all-container');
    if (showAllContainer && phones.length > 12) {
        showAllContainer.classList.remove('hidden');
    } else if (showAllContainer) {
        showAllContainer.classList.add('hidden');
    }

    phones = phones.slice(0, 12);

    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-base-100 w-96 p-10 shadow-xl`;
        phoneCard.innerHTML = `
            <figure>
                <img src=${phone.image} alt="${phone.phone_name}" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-center my-5">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>`;
        phoneContainer.appendChild(phoneCard);
    });
};
