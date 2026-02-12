import { useEffect, useState } from "react";
import axios from "axios";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [expanded, setExpanded] = useState({}); // Track which blogs are expanded

  useEffect(() => {
    axios
      .get("https://backendsorath.vercel.app/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Helper: slice content by 300 words
  const getPreview = (content) => {
    const words = content.split(" ");
    if (words.length <= 300) return content;
    return words.slice(0, 300).join(" ") + "...";
  };

  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-900 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-indigo-800 tracking-wide">
          All Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((b) => {
            const wordCount = b.content.split(" ").length;
            const isExpandable = wordCount > 300;

            return (
              <div
                key={b._id}
                className="bg-white border border-indigo-300 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-indigo-700 hover:text-indigo-500 transition-colors duration-300">
                    {b.title}
                  </h3>
                  <p className="italic text-sm text-gray-500 mt-2">
                    Category: {b.category}
                  </p>

                  <p className="text-gray-800 mt-4 text-lg leading-relaxed font-serif transition-all duration-300">
                    {isExpandable && !expanded[b._id]
                      ? getPreview(b.content)
                      : b.content}
                  </p>
                </div>

                {/* Show Read More / Show Less button if content > 300 words */}
                {isExpandable && (
                  <button
                    onClick={() => toggleReadMore(b._id)}
                    className="mt-4 text-indigo-600 hover:text-indigo-400 font-semibold transition-colors duration-300 self-start"
                  >
                    {expanded[b._id] ? "Show Less" : "Read More"}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
