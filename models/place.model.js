const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  mainPhoto: String,
  descriptionPhoto: String,
  location: {
    country: String,
    continent: String,
  },
  images: [String],
  info: {
    shortDescription: String,
    longDescription: String,
    language: String,
    hotSpots: [{
      name: String,
      location: {
        lat: Number,
        lng: Number,
      },
      images:[String],
      description: String
    }]
  },
  filters: {
    time: { type: String, enum:["Weekend", "Week", "+Week"]},
    continent: String, enum:["Europe","America","Africa","Asia","Oceania","Antartica"],
    language: {type: [String], enum:[ "English", "Spanish", "Chinese", "Hindi", "Arabic", 
    "Portuguese", "Begali", "Russian", "Japanese"]},
    activities: {type: [String], enum:["Relax", "Beach", "Mountain", "Adventure", "Active tourism"]},
    money: {type: String, enum:["€","€€","€€€","€€€€"]}
  }
}, { timestamps: true })

  
  const Place = mongoose.model('Place', placeSchema);
  
  module.exports = Place;