import { useParams, Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "How I Started Learning React",
    summary: "A short story of how I built my first project...",
    content: "This is the full post about learning React. It's been a journey!",
  },
  {
    id: 2,
    title: "What Tailwind CSS Taught Me",
    summary: "Tailwind made my styling much faster and cleaner...",
    content: "Tailwind CSS has changed how I approach frontend design entirely.",
  },
  {
    id: 3,
    title: "Why I’m Building a Blog in Public",
    summary: "Sharing my progress helps keep me accountable...",
    content: "Public learning gives me pressure and encouragement to keep going.",
  },
];

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="p-6 text-red-600 text-center">
        <h2>Post not found</h2>
        <Link to="/posts" className="text-indigo-600 underline">← Go back</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-700">{post.title}</h1>
      <p className="mt-4 text-gray-800">{post.content}</p>
      <Link to="/posts" className="block mt-6 text-indigo-500 underline">← Back to all posts</Link>
    </div>
  );
};

export default PostDetail;
// This component displays the details of a single post.
// It uses the `useParams` hook to get the post ID from the URL, and then finds the corresponding post in the `posts` array.