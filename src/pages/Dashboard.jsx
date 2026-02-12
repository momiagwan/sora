import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext.jsx";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: "", content: "", category: "" });
  const [editId, setEditId] = useState(null);
  const { token, logout } = useAuth();

  const headers = { Authorization: `Bearer ${token}` };

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("https://backendsorath.vercel.app/api/blogs", { headers });
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(
          `https://backendsorath.vercel.app/api/blogs/${editId}`,
          form,
          { headers }
        );
      } else {
        await axios.post(
          "https://backendsorath.vercel.app/api/blogs",
          form,
          { headers }
        );
      }
      setForm({ title: "", content: "", category: "" });
      setEditId(null);
      fetchBlogs();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://backendsorath.vercel.app/api/blogs/${id}`, { headers });
      fetchBlogs();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (blog) => {
    setForm({
      title: blog.title,
      content: blog.content,
      category: blog.category,
    });
    setEditId(blog._id);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-8 tracking-tight">
          Admin Blog Dashboard
        </h2>

        {/* Blog Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 rounded-2xl p-6 mb-8 shadow-lg"
        >
          <h3 className="text-xl font-bold text-indigo-400 mb-4">
            {editId ? "Edit Blog" : "Create New Blog"}
          </h3>

          <input
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="border border-gray-700 rounded-lg p-3 w-full mb-4 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            placeholder="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="border border-gray-700 rounded-lg p-3 w-full mb-4 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Content"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="border border-gray-700 rounded-lg p-3 w-full mb-4 bg-gray-800 text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
          >
            {editId ? "Update Blog" : "Create Blog"}
          </button>
        </form>

        {/* Blog List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((b) => (
            <div
              key={b._id}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-indigo-400 mb-2">{b.title}</h3>
                <p className="text-sm italic text-gray-400 mb-3">
                  Category: {b.category}
                </p>
                <p className="text-gray-200 mb-4 leading-relaxed font-serif line-clamp-6">
                  {b.content}
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => handleEdit(b)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-all duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(b._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-all duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Logout */}
        <div className="text-center mt-8">
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
