import express from "express";
import { addIngredientType, getIngredientType, getIngredientTypeById, updateIngredientType } from "../Controllers/Ingredients/ingredientTypeController.js";
import { addIngredient, getIngredient } from "../Controllers/Ingredients/ingredientController.js";


const ingredient = express.Router();

//add  ingredient type
ingredient.post('/ingredientType', addIngredientType);
//get  all ingredient types
ingredient.get('/ingredientType',getIngredientType);
//single ingredient type
ingredient.get('/ingredientType/:_id', getIngredientTypeById);
//update  ingredient type
ingredient.put('/ingredientType/:_id', updateIngredientType);


//add ingredient
ingredient.post ('/ingredients', addIngredient);
//get  all ingredients
ingredient.get('/ingredients', getIngredient);





export default ingredient;
