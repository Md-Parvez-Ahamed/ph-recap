console.log('connected');

const loadCategory = async () => {
    const response = await fetch ('https://openapi.programming-hero.com/api/news/categories')
    const data = await response.json()
    // console.log(data.data.news_category);
    
    data.data.news_category.forEach(element => {
        // console.log(element);
        const nav = document.getElementById('nav')
        const button = document.createElement('button')
        button.classList.add('btn','btn-primary', 'mx-1')
        button.innerText = element.category_name;
        button.onclick = ()=>loadNews(element.category_id)
        nav.appendChild(button)
    });
}



const loadNews = async (category) =>{
    document.getElementById('loading').classList.remove('hidden')
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${category}`)
    const data = await response.json()
    // console.log(data.data);
    const allData = data.data;

    const signalNews = document.getElementById('single-news');
    signalNews.innerHTML = ''; // Clear previous news items

    allData.forEach(news => {
        const div = document.createElement('div');
        div.classList.add('card', 'card-side', 'bg-base-100', 'shadow-xl', 'mx-5', 'my-6');
        div.innerHTML = `
            <div class="w-2/4">
                <figure>
                    <img src="${news.thumbnail_url}" alt="News Thumbnail" />
                </figure>
            </div>
            <div class="card-body">
                <h2 class="card-title">${news.title}</h2>
                <p class="justify-center">${news.details.slice(0, 100)}...</p>
                <div class="flex items-center justify-center gap-4">
                    <div>
                        <div class="avatar">
                            <div class="w-24 rounded-full">
                                <img src="${news.author.img}" alt="Author Image" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>${news.author.name || 'Unknown Author'}</h1>
                        <h1>Date: ${news.author.published_date || 'N/A'}</h1>
                    </div>
                    <div>
                        <h1>View: ${news.total_view || 0}</h1>
                    </div>
                    <div>
                        <button class="btn btn-accent">Read More</button>
                    </div>
                </div>
            </div>
        `;
        signalNews.appendChild(div);
    });

}

const handelSearch = async () => {
    const searchField = document.getElementById('inputSearchBox')
    const searchText = searchField.value
    console.log(searchText);
    if(searchText){
        loadNews(searchText)
    }else{
        alert('please provide a right id')
    }
}


loadNews('01')


loadCategory()