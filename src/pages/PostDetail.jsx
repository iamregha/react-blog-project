import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function PostDetail() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../posts/${slug}.md`)
      .then((res) => fetch(res.default))
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => {
        console.error("Error loading markdown:", err);
        setContent("Post not found.");
      });
  }, []);

  return (
    <div className="p-6">
      <Link to="/posts" className="text-blue-600 underline mb-4 inline-block">← Back to posts</Link>

      <div className="prose max-w-none text-gray-800">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
