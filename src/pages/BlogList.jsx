
import { useEffect, useState } from "react";
import axios from "axios";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/blogs").then((res) => setBlogs(res.data));
  }, []);

  return (
    <div className=" bg-gradient-to-r from-gray-700 to-gray-900  min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-indigo-800 tracking-wide">
          All Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((b) => (
            <div
              key={b._id}
              className="bg-white border border-indigo-300 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-indigo-700 hover:text-indigo-500 transition-colors duration-300">
                {b.title}
              </h3>
              <p className="italic text-sm text-gray-500 mt-2">
                Category: {b.category}
              </p>
              <p className="text-gray-800 mt-4 text-lg leading-relaxed font-serif">
                {b.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
