import posts from "../data/postsData";
import { Link } from "react-router-dom";

export default function Posts() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">📚 Blog Posts</h2>

      {posts.map((post) => (
        <div
          key={post.slug}
          className="bg-white shadow-md rounded-lg p-4 mb-6 hover:shadow-lg transition-shadow"
        >
          <p className="text-sm text-gray-500 mb-1">
            {new Date(post.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <h3 className="text-xl font-semibold text-blue-600 mb-1">
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          </h3>

          <p className="text-gray-700">{post.summary}</p>
        </div>
      ))}
    </div>
  );
}
// This component displays a list of blog posts with titles, summaries, and publication dates.
// Each post links to its detailed view, which is rendered in the PostDetail component.