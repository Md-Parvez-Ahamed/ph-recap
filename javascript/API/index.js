function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData(data))
}

function displayData(users){

    const ul = document.getElementById('user-list')

        for(let user of users){
            console.log(user.name);
            console.log(user.email);
            const li = document.createElement('li')
            li.innerText = user.name
            ul.appendChild(li)
        }
}