const posts = [
  {
    id: 1,
    title: "How I Started Learning React",
    summary: "A short story of how I built my first project...",
  },
  {
    id: 2,
    title: "What Tailwind CSS Taught Me",
    summary: "Tailwind made my styling much faster and cleaner...",
  },
  {
    id: 3,
    title: "Why I’m Building a Blog in Public",
    summary: "Sharing my progress helps keep me accountable...",
  },
];

const Posts = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">All Posts</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mt-1">{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
