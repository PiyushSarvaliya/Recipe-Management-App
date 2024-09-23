const Recipe = require("../models/recipe.model")
const wrapAsyc = require("../utils/wrapAsyc")

const create = wrapAsyc(async(req , res) =>{
    let {title , ingredients , instructions , cuisineType} = req.body

    let data = await Recipe.create(req.body)
    res.status(200).json({msg : "data is created" , data})
})

const allrecipe = wrapAsyc(async(req , res) =>{
    let alldata = await Recipe.find()
    res.status(200).json({alldata})
})

const updaterecipe = wrapAsyc(async(req , res) =>{
        let {id} = req.params
        let data = await Recipe.findByIdAndUpdate(id , req.body)
        res.status(200).json(data)
})

const deleterecipe = wrapAsyc(async(req , res) => {
    
        let {id} = req.params
        let data = await Recipe.findByIdAndDelete(id)
        res.status(200).json(data) 
})

const SingleRecipe = wrapAsyc(async (req, res) => {

    const recipe = await Recipe.findById(req.params.id).populate('userID');
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    res.json(recipe);

});

module.exports = {create , allrecipe , updaterecipe , deleterecipe , SingleRecipe}