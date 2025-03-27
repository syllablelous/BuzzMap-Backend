const Report = require('../models/Reports')
const mongoose = require('mongoose');


// * GET all posts
const getAllPosts = async (req, res) => {
  // ? find could be modified to look for posts with specific properties.
  // ? createdAt: -1 - newest at the top, could be good for Latest tab
  const posts = await Report.find({}).sort({ createdAt: -1});

  res.status(200).json(posts);
}

// * GET a specific post
const getPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such post!'});
  }
  const post = await Report.findById(id);

  if (!post) {
    return res.status(404).json({ error: 'Post does not exist!' });
  }

  res.status(200).json(post);
}

// * POST a new post
const createReport = async (req, res) => {
  const { report_id, district, barangay, specific_location, date, time, report_type, description, images, status } = req.body;

  try {
    const report = await Report.create({
      report_id,
      district,
      barangay,
      specific_location,
      date,
      time,
      report_type,
      description,
      images,
      status
    });
    res.status(200).json(report);
  } catch(error) {
    res.status(400).json({ error: error.message });
  }
}

// ! DELETE a post - ADMIN side
const deleteReport = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such post!'});
  }

  const report = await Report.findOneAndDelete({_id: id});

  if(!report) {
    return res.status(404).json({error: 'No such post exists!'});
  }

  res.status(200).json(report);
}

module.exports = {
  getAllPosts,
  getPost,
  createReport,
  deleteReport
}