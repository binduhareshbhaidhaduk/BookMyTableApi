import mongoose, { Schema } from "mongoose";

const ingredientSchema = new Schema({
    name: String,
    type: {
        type: Schema.Types.ObjectId,
        ref: 'IngredientType',
    }
});

const ingrediantModel= mongoose.model('Ingredient',ingredientSchema);

export default  ingrediantModel;
