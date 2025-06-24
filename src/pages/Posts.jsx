import posts from "../data/postsData"; // Assuming you have a posts data file
import { Link } from "react-router-dom";

export default function Posts() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Posts</h2>

      {posts.map((post) => (
        <div key={post.slug} className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600">
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="text-gray-600">{post.summary}</p>
        </div>
      ))}
    </div>
  );
}

// This component lists all posts with links to their detail pages.
// It uses the `posts` data imported from a separate file.  