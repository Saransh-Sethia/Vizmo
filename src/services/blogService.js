const { createBlog } = require("../controllers/blogController");
const Blog = require("../models/Blog");

const createBlog = async (blogData) => {
    try {
      const blog = await Blog.create(blogData);
  
      return blog;
    } catch (error) {
      throw error;
    }
  };

  const getAllBlogs = async (blogId, query) => {
    try {
      const blogs = await Blog.find({ author: blogId});
      // console.log("All Blogs", blogs)
      return blogs;
    } catch (error) {
      throw error;
    }
  };

module.exports = {createBlog, getAllBlogs}