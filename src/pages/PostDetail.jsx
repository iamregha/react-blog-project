import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function PostDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const storedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
  const post = storedPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl text-red-600 mb-2">404 - Post Not Found</h1>
        <button
          onClick={() => navigate("/posts")}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          ← Back to Posts
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <button
        onClick={() => navigate("/posts")}
        className="mb-4 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
      >
        ← Back to Posts
      </button>

      <h1 className="text-3xl font-bold text-indigo-700 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">By {post.author}</p>

      <div className="prose max-w-none text-gray-800">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}

