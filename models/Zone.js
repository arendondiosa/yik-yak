const mongoose = require('mongoose');

const ZoneSchema = mongoose.Schema({
  name: { type: String, default: '' },
  zip: { type: Number },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ZoneSchema', ZoneSchema);