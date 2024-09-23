const {Router} = require("express")
const { create, allrecipe, updaterecipe, deleterecipe, SingleRecipe } = require("../controllers/recipe.controller")
const { Auth } = require("../middleware/auth")
const recipeRoute = Router()

recipeRoute.post("/create" , Auth ,create)
recipeRoute.get("/allrecipe" , Auth ,allrecipe)
recipeRoute.patch("/update/:id" , Auth ,updaterecipe)
recipeRoute.delete("/delete/:id" , Auth, deleterecipe)
recipeRoute.get("/singlerecipe" , Auth , SingleRecipe)


module.exports = recipeRoute