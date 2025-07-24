import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function EditPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    const found = storedPosts.find((p) => p.slug === slug);
    if (!found) {
      alert("Post not found.");
      navigate("/posts");
    } else {
      setPost(found);
    }
  }, [slug, navigate]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!post.title || !post.summary || !post.author || !post.content) {
      alert("Please fill in all fields.");
      return;
    }

    const updatedPost = {
      ...post,
      tags: Array.isArray(post.tags)
      ? post.tags
      : typeof post.tags === "string"
      ?post.tags.split(",").map((tag) => tag.trim().toLowerCase()) 
      : [],
      date: post.date || new Date().toISOString(),
    };

    const allPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    const updatedPosts = allPosts.map((p) => (p.slug === slug ? updatedPost : p));
    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    alert("Post updated!");
    navigate(`/posts/${slug}`);
  };

  if (!post) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full mb-2 p-2 border rounded"
          value={post.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="summary"
          placeholder="Summary"
          className="w-full mb-2 p-2 border rounded"
          value={post.summary}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          className="w-full mb-2 p-2 border rounded"
          value={post.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          className="w-full mb-2 p-2 border rounded"
          value={post.tags?.join(", ")}
          onChange={handleChange}
        />
        <textarea
          name="content"
          rows="10"
          placeholder="Markdown content..."
          className="w-full mb-2 p-2 border rounded"
          value={post.content}
          onChange={handleChange}
        />
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Live Preview</h2>
        <div className="prose max-w-none border p-4 rounded">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
