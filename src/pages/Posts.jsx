import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedTag = queryParams.get("tag");

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    setPosts(storedPosts);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">📚 Blog Posts</h2>
      
      <input
        type="text"
        placeholder="Search posts..."
        className="w-full mb-6 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {selectedTag && (
        <div className="mb-4">
          <span className="text-sm">
            Showing posts tagged with{" "}
            <span className="font-semibold text-blue-600">#{selectedTag}</span>
          </span>
          <Link
            to="/posts"
            className="ml-4 text-sm text-red-500 underline"
          >
            Clear Filter
          </Link>
        </div>
      )}


      {posts
        .filter((post) => {
          const matchesSearch =
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.summary.toLowerCase().includes(searchTerm.toLowerCase());
          
          const matchesTag = selectedTag
            ? post.tags?.includes(selectedTag)
            : true;

          return matchesSearch && matchesTag
        }
            
        )
        .map((post) => (
          <div
            key={post.slug}
            className="bg-white shadow-md rounded-lg p-4 mb-6 hover:shadow-lg transition-shadow"
          >
            <p className="text-sm text-gray-500 mb-1">
              {post.date
                ? new Date(post.date).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "No date"}
            </p>
            <p className="text-sm text-gray-500 mb-2">By {post.author}</p>
            <h3 className="text-xl font-semibold text-blue-600 mb-1">
              <Link to={`/posts/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="text-gray-700">{post.summary}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <Link
                  to={`?tag=${encodeURIComponent(tag)}`}
                  key={tag}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full hover:bg-blue-200 transition"
                 >
                  #{tag}
                </Link>
              ))}
            </div>

          </div>
        ))}
    </div>
  );
}

// This component displays a list of blog posts with titles, summaries, and publication dates.
// Each post links to its detailed view, which is rendered in the PostDetail component.