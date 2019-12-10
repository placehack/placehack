const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  mainPhoto: String,
  descriptionPhoto: String,
  location: {
    lat: Number,
    lng: Number,
    country: String,
    continent: String,
  },
  images: [String],
  info: {
    description: String,
    hotSpots: [{
      name: String,
      location: {
        lat: Number,
        lng: Number,
      },
      images:[String],
      description: String
    }]
  }
}, { timestamps: true })

  // placeSchema.pre('save', function (next) {
  //   next();
  // });
  
  const Place = mongoose.model('Place', placeSchema);
  
  module.exports = Place;