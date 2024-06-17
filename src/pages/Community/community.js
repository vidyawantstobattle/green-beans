// src/components/CommunityFeed.js
import React, { useState } from 'react';
import './community.css'; // Create this CSS file for styling

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "What are the emission factors for different types of fuels?",
      author: "Alice",
      content: "Can someone provide detailed emission factors for coal, natural gas, and diesel?",
      comments: [
        { author: "Bob", content: "Emission factors vary by source. For example, coal has a high CO2 emission factor, while natural gas is lower." },
        { author: "Charlie", content: "You can check the EPA's database for specific numbers." }
      ]
    },
    {
      id: 2,
      title: "How to calculate CO2 emissions from electricity consumption?",
      author: "Dave",
      content: "I need help with calculating CO2 emissions based on electricity usage.",
      comments: [
        { author: "Eve", content: "You can use the average grid emission factor, which is usually available from your utility provider." }
      ]
    }
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '', author: '' });

  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...newPost, id: posts.length + 1, comments: [] }]);
    setNewPost({ title: '', content: '', author: '' });
  };

  const handleCommentChange = (index, e) => {
    const { name, value } = e.target;
    const newPosts = [...posts];
    newPosts[index].newComment = { ...newPosts[index].newComment, [name]: value };
    setPosts(newPosts);
  };

  const handleCommentSubmit = (index, e) => {
    e.preventDefault();
    const newPosts = [...posts];
    newPosts[index].comments.push(newPosts[index].newComment);
    newPosts[index].newComment = { content: '', author: '' };
    setPosts(newPosts);
  };

  return (
    <div className="community-feed-container">
      <h1>Community Forum</h1>
      <form onSubmit={handlePostSubmit} className="new-post-form">
        <input type="text" name="title" placeholder="Title" onChange={handlePostChange} value={newPost.title} required />
        <textarea name="content" placeholder="Content" onChange={handlePostChange} value={newPost.content} required />
        <input type="text" name="author" placeholder="Author" onChange={handlePostChange} value={newPost.author} required />
        <button type="submit">Post</button>
      </form>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p><strong>by {post.author}</strong></p>
            <div className="comments">
              {post.comments.map((comment, idx) => (
                <div key={idx} className="comment">
                  <p>{comment.content}</p>
                  <p><strong>by {comment.author}</strong></p>
                </div>
              ))}
              <form onSubmit={(e) => handleCommentSubmit(index, e)} className="new-comment-form">
                <textarea name="content" placeholder="Comment" onChange={(e) => handleCommentChange(index, e)} value={post.newComment?.content || ''} required />
                <input type="text" name="author" placeholder="Author" onChange={(e) => handleCommentChange(index, e)} value={post.newComment?.author || ''} required />
                <button type="submit">Add Comment</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
