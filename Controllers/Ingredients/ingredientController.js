import ingrediantModel from "../../model/Ingredents/Ingredient.js";

export const addIngredient = async (req, res) => {
    try {
        const { name, type } = req.body;
        const ingredient = new ingrediantModel({
            name,
            type
        });
        await ingredient.save();
        console.log('add ingredient', ingredient)
        res.status(200).json(ingredient);
    }
    catch (err) {
        res.status(500).json({ message: "Error Occured", error: err });
    }
}

export const getIngredient = async (req, res) => {
    try {
        const ingredient = await ingrediantModel.find().populate('type');
        console.log('get all ingredient', ingredient)
        res.status(200).json(ingredient);
    }
    catch (err) {
        res.status(500).json({ message: "Error Occured", error: err });
    }
}
