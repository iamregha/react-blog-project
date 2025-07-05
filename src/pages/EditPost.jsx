import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EditPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const storedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
  const post = storedPosts.find((p) => p.slug === slug);

  const [title, setTitle] = useState(post?.title || "");
  const [author, setAuthor] = useState(post?.author || "");
  const [content, setContent] = useState(post?.content || "");

  useEffect(() => {
    if (!post) navigate("/posts");
  }, [post, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPosts = storedPosts.map((p) =>
      p.slug === slug ? { ...p, title, author, content } : p
    );
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    navigate(`/posts/${slug}`);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <textarea
          className="w-full border p-2 rounded h-48"
          placeholder="Post Content (Markdown)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          ✅ Save Changes
        </button>
      </form>
    </div>
  );
}
