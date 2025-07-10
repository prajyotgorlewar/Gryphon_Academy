const Post = require('../models/Post');

const createPost = async (data, userId) => {
  return await Post.create({ ...data, createdBy: userId });
};

const getPosts = async () => {
  return await Post.find().populate('createdBy', 'name email');
};

const getPostById = async (id) => {
  return await Post.findById(id).populate('createdBy', 'name email');
};

const updatePost = async (id, data) => {
  return await Post.findByIdAndUpdate(id, data, { new: true });
};

const deletePost = async (id) => {
  return await Post.findByIdAndDelete(id);
};

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost };
