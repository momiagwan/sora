
import React, { useState } from 'react';

const categories = [
  'All',
  'Marriages',
  'Recent Deaths',
  'Warning to Members',
  'Community Forms',
  'Notifications',
];

const navbarr = () => {
  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState('All');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    category: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.category) {
      alert('Please select a category');
      return;
    }
    setBlogs([formData, ...blogs]);
    setFormData({
      title: '',
      description: '',
      image: '',
      category: '',
    });
  };

  const filteredBlogs = filter === 'All'
    ? blogs
    : blogs.filter((blog) => blog.category === filter);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Community Blog Portal</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-10">
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          name="description"
          placeholder="Short Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded h-24"
        />
    
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        >
          <option value="">-- Select Category --</option>
          {categories.slice(1).map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Post Blog
        </button>
      </form>

      {/* Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1 rounded-full border ${
              filter === cat ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
            } hover:bg-blue-100`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">No blog posts found.</p>
        ) : (
          filteredBlogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white shadow rounded-lg p-4 flex flex-col justify-between"
            >
              {blog.image && (
                <img
                  src={blog.image}
                  alt="Blog"
                  className="w-full h-40 object-cover rounded mb-3"
                />
              )}
              <h2 className="text-xl font-bold">{blog.title}</h2>
              <p className="text-gray-600 mt-2 mb-4">{blog.description}</p>
              <span className="inline-block bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded">
                {blog.category}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default navbarr;
