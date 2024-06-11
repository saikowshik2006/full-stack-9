import React, { useEffect, useState } from 'react';
import './ViewArticle.css'

function ViewArticle() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/articles/')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    return (
      <div className="container">
        <header>
          <h2 class="header2">View Articles</h2>
          <Link to="/home">
            <button className="home-button">Home</button>
          </Link>
        </header>
        <div className="article-container">
          {articles.length === 0 ? (
            <p>No articles available.</p>
          ) : (
            articles.map((article, index) => (
              <div key={index} className="article">
                <div className="article-content">
                  <div>
                    <h3>{article.title}</h3>
                    <p>{article.content}</p>
                  </div>
                  <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                </div>
    
              </div>
            ))
          )}
        </div>
      </div>
    );
};

export default ViewArticle;

