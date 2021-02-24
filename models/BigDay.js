const mongoose = require('mongoose');
const BigDaySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Please add title'],
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'Please add description'],
    },
    begin: {
      type: String,
      trim: true,
      required: [true, 'Please add begin time'],
    },
    end: {
      type: String,
      trim: true,
      required: [true, 'Please add end time'],
    },
    totalDays: {
      type: Number,
      required: [true, 'Please add totalDays'],
    },
    isHighlight: {
      type: Boolean,
      default: false,
    },
    themeColor: {
      type: String,
      trim: true,
      required: [true, 'Please add theme color'],
    },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model('BigDay', BigDaySchema);
