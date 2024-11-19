console.log('hello from js');

const liCollection = document.getElementsByTagName('li');
console.log(liCollection);

for(const item of liCollection){
    console.log(item.innerText);
}

const heading = document.getElementsByTagName('h1')
console.log(heading);
for(h1 of heading){
    console.log(h1);
}

const forntSection = document.getElementById('forntEnd-heading')
console.log(forntSection);

const importent = document.getElementsByClassName('importanet')
console.log(importent);

document.getElementById('forntEnd-heading').style.backgroundColor('Blue');
const tittle =document.getElementById('forntEnd-heading')
tittle.getAttribute('id')