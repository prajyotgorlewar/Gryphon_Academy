const {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
} = require('../services/postService');

const create = async (req, res) => {
    try {
        const post = await createPost(req.body, req.user.id);
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

const getAll = async (req, res) => {
    const posts = await getPosts();
    res.json(posts);
};

const getOne = async (req, res) => {
    const post = await getPostById(req.params.id);
    res.json(post);
};

const update = async (req, res) => {
    const post = await updatePost(req.params.id, req.body);
    res.json(post);
};

const remove = async (req, res) => {
    await deletePost(req.params.id);
    res.json({ msg: 'Post deleted' });
};

module.exports = { create, getAll, getOne, update, remove };

