console.log('news connected');

const loadCategory = async () =>{
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json()
    // console.log('name',data.data.news_category);
    data.data.news_category.forEach(category => {
        // console.log(category.category_name);
        const nav= document.getElementById('nav')
        const button = document.createElement('button')
        button.classList.add('btn' ,'btn-primary')
        button.innerHTML= `
            <button onclick= "loadNews('${category.category_id}')">${category.category_name}</button>
        
        `
        nav.appendChild(button)
        
    });
}

const loadNews = async (categoryID) =>{
    console.log('id',categoryID);
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryID}`)

    const data = await response.json();
    const allData = data.data
    const signalNews =  document.getElementById('single-news')
   
        //  signalNews.innerHTML = ''
    // console.log(data.data);
    allData.forEach(data =>{
        //  console.log('news data', data.title);
         const div = document.createElement('div')
         div.classList.add('card', 'card-side' ,'bg-base-100', 'shadow-xl' ,'mx-5' ,'my-6')
         div.innerHTML =`
         <div class="card card-side bg-base-100 shadow-xl ">
                    <div class="w-2/4">
                        <figure>
                            <img
                              src=${data.thumbnail_url}
                              alt="Movie" />
                          </figure>
                    </div>
                    
                    <div class="card-body">
                      <h2 class="card-title">${data.title}</h2>
                      <p class="justify-center"> ${data.details.slice(0,100)}</p>
                      <div class="flex items-center justify-center gap-4">
                         <div>
                            <div class="avatar">
                                <div class="w-24 rounded-full">
                                  <img src= ${data.author.img}/>
                                </div>
                              </div>
                         </div>
                         <div>
                            <h1>${data.author.name}</h1>
                            <h1>Date: ${data.author.published_date}</h1>
                         </div>
                         <div>
                            <h1>View : ${data.total_view}</h1>
                         </div>
                         <div>
                            <button class="btn btn-accent">Read More</button>
                         </div>
                      </div>
                      <!-- <div class="card-actions justify-end">
                        <button class="btn btn-primary">Watch</button>
                      </div> -->
                    </div>
                </div>

         `
        signalNews.appendChild(div)
    })
}
loadNews('01')
loadCategory()