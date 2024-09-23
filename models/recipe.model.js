const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: { type: String, required: true },
  cuisineType: { type: String },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'recipeuser' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe