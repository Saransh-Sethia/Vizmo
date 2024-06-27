const Blog = require("../models/Blog");
const { validateMongoDBId } = require("../utils/validateMongodbId");

const createBlog = async (blogData) => {
  try {
    const blog = await Blog.create(blogData);

    return blog;
  } catch (error) {
    throw error;
  }
};

const getAllBlogs = async (blogId) => {
  try {
    const blogs = await Blog.find({ author: blogId});
    // console.log("All Blogs", blogs)
    return blogs;
  } catch (error) {
    throw error;
  }
};

const filterBlogs = async (blogId, title) => {
  try {
    const blogs = await Blog.find({ author: blogId, title: title});
    return blogs;
  } catch (error) {
    throw error;
  }
};


const updateBlog = async (id, blogId, updatedData) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      { _id: id, author: blogId },
      { $set: updatedData },
      { new: true }
    );
    return blog;
  } catch (error) {
    throw error;
  }
};

const deleteBlog = async (id, blogId) => {
  try {
    const blog = await Blog.findOneAndDelete({ _id: id, author: blogId });
    return blog;
  } catch (error) {
    throw error;
  }
};

const getSingleBlog = async (id) => {
  try {
    validateMongoDBId(id)
    const blog = await Blog.findById(id);
    return blog;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  filterBlogs,
  updateBlog,
  deleteBlog,
  getSingleBlog,
};
