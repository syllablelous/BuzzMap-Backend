const mongoose = require('mongoose');
// * require('mongoose-int32'); Do this only if int32 is really needed for storage constraints

const Schema = mongoose.Schema

const reportSchema = new Schema({
  report_id: {
    type: String,
    required: true,
    unique: true
  },
  district: {
    type: Number,
    required: true,
  },
  barangay: {
    type: String,
    required: true,
  },
  specific_location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: { 
    type: String, 
    required: true
  },
  report_type: { 
    type: String, 
    required: true,
    enum: ["Breeding Site", "Suspected Case", "Standing Water", "Infestation"] 
  },
  description: { type: String },
  images: [{ type: String }],
  status: { 
    type: String, 
    default: "Pending", 
    enum: ["Pending", "Rejected", "Validated"]
  },
},{ timestamps: true });

module.exports = mongoose.model('Report', reportSchema);