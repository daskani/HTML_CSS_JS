const apiKey = "26d4e930dfab44afbdffbfdae04e7e1f";
const newsContainer = document.getElementById("news-container");

async function fetchNews() {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?language=en&pageSize=6&apiKey=${apiKey}`);
    const data = await response.json();
    
    data.articles.forEach(article => {
      const card = document.createElement('div');
      card.className = 'news-card';

      card.innerHTML = `
        <img src="${article.urlToImage || 'https://via.placeholder.com/300x180'}" alt="News Image">
        <div class="news-card-content">
          <h3>${article.title}</h3>
          <p>${article.description || 'No description available.'}</p>
          <a href="${article.url}" target="_blank">Read more</a>
        </div>
      `;

      newsContainer.appendChild(card);
    });

  } catch (error) {
    console.error("Error fetching news:", error);
    newsContainer.innerHTML = `<p>Failed to load news. Please try again later.</p>`;
  }
}
fetchNews();
