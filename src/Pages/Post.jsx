import React, { useState } from 'react';

function Post() {
  const [postType, setPostType] = useState('question');

  const [formData, setFormData] = useState({
    title: '',
    problem: '',
    abstract: '',
    articleText: '',
    tags: ''
  });

  const handleTypeChange = (event) => {
    setPostType(event.target.value);
    setFormData({ title: '', problem: '', abstract: '', articleText: '', tags: '' });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePost = (event) => {
    event.preventDefault();

    if (postType === 'question') {
      if (!formData.title || !formData.problem || !formData.tags) {
        alert("Please fill in all question fields.");
        return;
      }
    } else {
      if (!formData.title || !formData.abstract || !formData.articleText || !formData.tags) {
        alert("Please fill in all article fields.");
        return;
      }
    }

    alert("Your post has been sent!");
    setFormData({ title: '', problem: '', abstract: '', articleText: '', tags: '' });
  };

  return (
    <div className="post-container">
      <div className="section-header">New Post</div>
      
      <div className="type-selector">
        <span className="label-bold">Select Post Type:</span>
        <label>
          <input 
            type="radio" 
            value="question" 
            checked={postType === 'question'} 
            onChange={handleTypeChange} 
          /> Question
        </label>
        <label>
          <input 
            type="radio" 
            value="article" 
            checked={postType === 'article'} 
            onChange={handleTypeChange} 
          /> Article
        </label>
      </div>

      <div className="section-header">What do you want to ask or share</div>
      
      <form onSubmit={handlePost} className="post-form">
        <p className="instruction-text">
          This section is designed based on the type of the post. It could be developed by conditional rendering. 
          <span className="red-text">
            {postType === 'question' 
              ? ' For post a question, the following section would be appeared.' 
              : ' For post an article, the following section would be appeared.'}
          </span>
        </p>

        <div className="form-row">
          <label className="label-bold">Title</label>
          <input 
            type="text" 
            name="title" 
            placeholder={postType === 'question' ? "Start your question with how, what, why, etc." : "Enter a descriptive title"} 
            value={formData.title} 
            onChange={handleChange} 
          />
        </div>

        {postType === 'question' && (
          <div className="form-row">
            <label className="label-bold">Describe your problem</label>
            <textarea 
              name="problem" 
              rows="8" 
              value={formData.problem} 
              onChange={handleChange} 
            ></textarea>
          </div>
        )}

        {postType === 'article' && (
          <>
            <div className="form-row">
              <label className="label-bold">Abstract</label>
              <textarea 
                name="abstract" 
                rows="3" 
                placeholder="Enter a 1-paragraph abstract" 
                value={formData.abstract} 
                onChange={handleChange} 
              ></textarea>
            </div>
            <div className="form-row">
              <label className="label-bold">Article Text</label>
              <textarea 
                name="articleText" 
                rows="8" 
                placeholder="Enter a 1-paragraph article text" 
                value={formData.articleText} 
                onChange={handleChange} 
              ></textarea>
            </div>
          </>
        )}

        <div className="form-row">
          <label className="label-bold">Tags</label>
          <input 
            type="text" 
            name="tags" 
            placeholder={`Please add up to 3 tags to describe what your ${postType} is about e.g., Java`} 
            value={formData.tags} 
            onChange={handleChange} 
          />
        </div>

        <button type="submit" className="post-btn">Post</button>
      </form>
    </div>
  );
}

export default Post;