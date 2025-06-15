import React from 'react';
import Header from './Header';
import Post from './Post';

function App() {
  const posts = [
    {
      id: 1,
      title: 'My First Post',
      content: 'This is my very first blog post. I\'m learning React!',
    },
    {
      id: 2,
      title: 'Another Post',
      content: 'Here\'s another post for practice. React is pretty cool.',
    },
    {
      id: 3,
      title: 'Yet Another Post',
      content: 'I feel like I’m getting the hang of components and props!',
    },
  ];

  return (
    <div>
      <Header />
      <h1>Welcome to my blog</h1>

      {posts.map((post) => (
        <Post key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
}

export default App;
// This code defines the main App component for a simple React blog application.
// It imports the Header and Post components, defines a list of posts, and renders them in the main application view.
// The App component serves as the root of the application, displaying a header and a list of blog posts.
// The posts are passed to the Post component, which handles displaying each post's title and content.
// The Header component is displayed at the top of the page, providing a consistent header for the blog.
// The App component is the main entry point for the React application, rendering the header and a list of posts.
