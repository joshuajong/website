import React, { useEffect, useState } from 'react';
import Post from '../components/Post.jsx';

function TravelPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from WordPress using the WordPress.com REST API
    fetch('https://public-api.wordpress.com/wp/v2/sites/joshuajong4.wordpress.com/posts?categories=5863')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.map((post) => ({
          title: post.title.rendered,
          datePosted: post.date,
          link: post.link,
          preview: post.excerpt.rendered,
          writtenBy: post.author.name,
          // You may need to extract the post ID here if you want to link to individual posts.
        })));
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-slate-900 p-4">
      <div className="mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-6xl">travel</h1>
      </div>
      <div className="grid grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default TravelPage;
