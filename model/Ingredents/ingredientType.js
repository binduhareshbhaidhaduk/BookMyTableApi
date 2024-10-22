import mongoose, { Schema } from "mongoose";

const ingredientschema= new Schema ({
    ingredient_type_code:String,
    ingredient_type_description:String,
})

const ingTypeModel=mongoose.model('IngredientType',ingredientschema);

export default ingTypeModel;