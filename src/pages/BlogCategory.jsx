import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogByCategory = () => {
  const { category } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [expanded, setExpanded] = useState({}); // Track expanded state per blog

  useEffect(() => {
    axios
      .get(`https://backendsorath.vercel.app/api/blogs/category/${category}`)
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, [category]);

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-white tracking-tight">
          Blogs in <span className="text-indigo-500">{category}</span> Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.length > 0 ? (
            blogs.map((b) => (
              <div
                key={b._id}
                className="bg-gray-900 text-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-indigo-400 mb-2 hover:text-indigo-300 transition-colors duration-300">
                    {b.title}
                  </h3>
                  <p className="italic text-sm text-gray-400 mb-4">
                    Category: {b.category}
                  </p>

                  {/* Blog content with expandable text */}
                  <p
                    className={`text-gray-200 text-base leading-relaxed font-serif transition-all duration-300`}
                  >
                    {expanded[b._id]
                      ? b.content
                      : b.content.length > 300
                      ? b.content.slice(0, 300) + "..."
                      : b.content}
                  </p>
                </div>

                {/* Read More / Show Less button */}
                {b.content.length > 300 && (
                  <button
                    onClick={() => toggleReadMore(b._id)}
                    className="mt-4 text-indigo-400 hover:text-indigo-300 font-semibold self-start transition-colors duration-300"
                  >
                    {expanded[b._id] ? "Show Less" : "Read More"}
                  </button>
                )}
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center text-indigo-400 text-lg animate__animated animate__fadeIn">
              No blogs available in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogByCategory;
