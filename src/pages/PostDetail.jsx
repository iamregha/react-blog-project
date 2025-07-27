import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import NotFound from "./NotFound";
//import authors from "../data/authorsData";

export default function PostDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [authorInfo, setAuthorInfo] = useState(null)

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    const found = storedPosts.find((p) => p.slug === slug);
    setPost(found || null)
    /*if (!found) {
      setPost ({ title: "404", content: "Post not found."});
    } else {
      setPost(found);
    }*/

      if (found?.author) {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const foundAuthor = users.find((u) => u.username === found.author);
      setAuthorInfo(foundAuthor || null)
    }

  }, [slug]);

    
  
  //const post = storedPosts.find((p) => p.slug === slug);
  //const authorInfo = authors.find(a => a.name === post?.author);

  if (!post) return <NotFound />; //return <p className="p-4">Loading...</p>
  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    const existing = JSON.parse(localStorage.getItem("posts") || "[]");
    const updated = existing.filter((p) => p.slug !== slug);
    localStorage.setItem("posts", JSON.stringify(updated));
    navigate("/posts");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link to="/posts" className="text-blue-600 underline mb-4 inline-block">
        ← Back to posts
      </Link>

      {/* <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-2">
        {new Date(post.date).toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        • By {post.author}
      </p>

      <div className="mt-4 prose max-w-none text-gray-800">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div> */}

        {post ? (
  <div className="max-w-3xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
    <p className="text-gray-500 text-sm mb-2 italic font-bold">By {post.author} |     {new Date(post.date).toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        </p>
    <div className="prose">
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>

    {/* Author Info Section */}
    <div className="mt-8 p-4 border-t text-sm text-gray-600 bg-gray-50 rounded">
      <p><strong>Author:</strong> {authorInfo?.username || "Unknown"}</p>
      <p><strong>Bio:</strong> {authorInfo?.bio || "No bio provided."}</p>
    </div>
  </div>
) : (
  <p className="text-center mt-10 text-gray-500">Post not found.</p>
)}


      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags?.map((tag) => (
          <span key={tag} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
            #{tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <Link
          to={`/posts/${post.slug}/edit`}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Edit
        </Link>

        <button
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
