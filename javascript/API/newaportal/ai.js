console.log('news connected');

const loadCategory = async () => {
    try {
        const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
        const data = await response.json();

        data.data.news_category.forEach(category => {
            const nav = document.getElementById('nav');
            const button = document.createElement('button');
            button.classList.add('btn', 'btn-primary', 'mx-1'); // Added spacing for better alignment
            button.innerText = category.category_name;
            button.onclick = () => loadNews(category.category_id);
            nav.appendChild(button);
        });
    } catch (error) {
        console.error("Error loading categories:", error);
    }
};

const loadNews = async (categoryID) => {
    try {
        console.log('Loading news for category ID:', categoryID);
        document.getElementById('loading').classList.add('block')
        const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryID}`);
        const data = await response.json();
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
    } catch (error) {
        console.error("Error loading news:", error);
    }
};

const handelSearch = () => {
    const handelSearch = document.getElementById('inputSearchBox');
    const text = handelSearch.value.trim(); // Trim any whitespace
    console.log(text);
    if (text) {
        loadNews(text); // Use the input value to load news
    } else {
        alert('Please enter a valid category ID');
    }
};

loadNews('01')

loadCategory();
