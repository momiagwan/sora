import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext.jsx"

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: "", content: "", category: "" });
  const [editId, setEditId] = useState(null);
  const { token, logout } = useAuth();

  const headers = { Authorization: `Bearer ${token}` };

  const fetchBlogs = async () => {
    const res = await axios.get("http://localhost:3000/api/blogs");
    setBlogs(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`http://localhost:3000/api/blogs/${editId}`, form, { headers });
    } else {
      await axios.post("http://localhost:3000/api/blogs", form, { headers });
    }
    setForm({ title: "", content: "", category: "" });
    setEditId(null);
    fetchBlogs();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/api/blogs/${id}`, { headers });
    fetchBlogs();
  };

  const handleEdit = (blog) => {
    setForm({ title: blog.title, content: blog.content, category: blog.category });
    setEditId(blog._id);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl mb-4">Admin Blog Dashboard</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2 w-full mb-2"
        />
        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border p-2 w-full mb-2"
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="border p-2 w-full mb-2"
        ></textarea>
        <button type="submit" className="bg-green-600 text-white px-4 py-2">
          {editId ? "Update" : "Create"}
        </button>
      </form>

      <div>
        {blogs.map((b) => (
          <div key={b._id} className="border p-4 mb-2">
            <h3 className="text-lg font-bold">{b.title}</h3>
            <p className="text-sm italic">Category: {b.category}</p>
            <p>{b.content}</p>
            <button onClick={() => handleEdit(b)} className="text-blue-600 mr-2">
              Edit
            </button>
            <button onClick={() => handleDelete(b._id)} className="text-red-600">
              Delete
            </button>
          </div>
        ))}
      </div>

      <button onClick={logout} className="mt-4 bg-red-500 text-white px-4 py-2">
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
