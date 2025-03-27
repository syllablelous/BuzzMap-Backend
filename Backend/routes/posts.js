const express = require('express');
const {
  getAllPosts,
  getPost,
  createReport,
  deleteReport,
} = require('../controllers/postController');

const router = express.Router();

// * Get all posts
router.get('/', getAllPosts);

// GET a specific post
router.get('/:id', getPost);

// POST a new post
router.post('/', createReport);

// ? Should this be for admin side?
router.delete('/:id', deleteReport);

// ? Should this be used for valiation portion of app?
router.patch('/:id', (req, res) => {
  res.json({message: 'UPDATE a post'});
});



module.exports = router;