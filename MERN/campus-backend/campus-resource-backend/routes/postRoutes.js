const express = require('express');
const router = express.Router();
const {
    create, getAll, getOne, update, remove
} = require('../controllers/postController');
const { protect, allowRoles } = require('../auth/rbac');

// Public: Get all posts
router.get('/', protect, getAll);
router.get('/:id', protect, getOne);

// Admin Only
router.post('/', protect, allowRoles('admin'), create);
router.put('/:id', protect, allowRoles('admin'), update);
router.delete('/:id', protect, allowRoles('admin'), remove);

module.exports = router;