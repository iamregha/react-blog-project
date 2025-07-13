import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

const generateSlug = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-")        // collapse whitespace and replace by -
    .replace(/-+/g, "-");        // collapse dashes


const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [slug, setSlug] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setSlug(generateSlug(title));
  }, [title]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState('');

  return (
    <div className="max-w-5xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      {/* Form Side */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
        <input
          type="text"
          placeholder="Title"
          className="w-full mb-2 p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {slug && (
  <p className="text-sm text-gray-500 mb-2">
    Slug: <code>{slug}</code>
  </p>
)}
        <input
          type="text"
          placeholder="Summary"
          className="w-full mb-2 p-2 border rounded"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        
        <input
          type="text"
          placeholder="Author"
          className="w-full mb-2 p-2 border rounded"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          className="w-full mb-2 p-2 border rounded"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <textarea
          rows="10"
          placeholder="Write your markdown content here..."
          className="w-full mb-2 p-2 border rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}/>
        </div>

        {/* Markdown Preview Side */}
        <div>
            <h2 className="text-2xl font-bold mb-4">Live Preview</h2>
            <div className="prose max-w-none border p-4 rounded">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
            <button
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 mt-4"
              onClick={() => {
                if (!title || !summary || !slug || !author || !content){
                  alert("Please fill in all fields.");
                  return;
                }
                const newPost = { 
                  title, 
                  summary, 
                  slug, 
                  author, 
                  content, 
                  tags: tags.split(",").map(tag => tag.trim().toLocaleLowerCase()),
                  date: new Date().toISOString(), 
                };
                const existing = JSON.parse(localStorage.getItem("posts") || "[]");
                existing.push(newPost);
                localStorage.setItem("posts", JSON.stringify(existing));
                alert("Post saved!");
                navigate("/posts");
              }}>
              Save Post
            </button>

        </div>
        <div className="max-w-5xl mx-auto p-4 mt-12 border-t pt-6">
            <h3 className="text-xl font-semibold mb-2">🧠 Markdown Cheat Sheet</h3>
        <div className="text-sm text-gray-700 space-y-2">
            <p><strong>Heading:</strong> <code># Title</code>, <code>## Subtitle</code></p>
            <p><strong>Bold:</strong> <code>**bold**</code> | <strong>Italic:</strong> <code>*italic*</code></p>
            <p><strong>List:</strong> <code>- Item</code>, <code>1. First</code></p>
            <p><strong>Link:</strong> <code>[OpenAI](https://openai.com)</code></p>
            <p><strong>Code:</strong> <code>`const x = 2`</code></p>
            <p><strong>Code Block:</strong></p>
            <pre className="bg-gray-100 rounded p-2 overflow-auto">
                <code>
                    ```js
                    console.log("Hello, world!");
                </code>
            </pre>
            <p><strong>Quote:</strong> <code>&gt; This is a quote</code></p>
            <p><strong>Divider:</strong> <code>---</code></p>
        </div>
        </div>```
    </div>
   
  );
};

export default CreatePost;
