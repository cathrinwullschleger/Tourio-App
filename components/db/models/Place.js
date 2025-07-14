import mongoose from "mongoose";

const { Schema } = mongoose;

const placeSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: {
    type: String,
    required: true,
    match: /^https?:\/\/.+/, // Validiert, dass es eine URL ist
  },
  mapURL: {
    type: String,
    required: true,
    match: /^https?:\/\/.+/, // Auch hier URL-Validator
  },
  description: {
    type: String,
    required: true,
  },
});

const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);

export default Place;
