import React, { useState } from 'react';

function AddArticle() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const article = { title, content };

        fetch('http://localhost:8000/articles/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(article),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setTitle('');
                setContent('');
            })
            .catch(error => console.error('Error:', error));
    };

    return (
      <div>
        <h2>Add an Article</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input type="text" name="title" value={article.title} onChange={handleChange} required />
          </div>
          <div>
            <label>Content</label>
            <textarea name="content" value={article.content} onChange={handleChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default AddArticle;



