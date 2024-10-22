import ingredientTypeModel from '../../model/Ingredents/ingredientType.js';

export const addIngredientType = async (req, res) => {
    try {
        const { ingredient_type_code, ingredient_type_description } = req.body;
        const ingredientType =await new ingredientTypeModel({
            ingredient_type_code,
            ingredient_type_description,
        });
        await ingredientType.save();
        console.log('add ingrediant type', ingredientType);

        res.status(200).json(ingredientType);
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
}

export const getIngredientType=async(req,res)=>{
    try{
        const ingredientType=await ingredientTypeModel.find();
        console.log('get ingrediant type',ingredientType);
        res.status(201).json(ingredientType);

    }catch(err){
        console.log(err);
    }
}

export  const getIngredientTypeById=async(req,res)=>{
    try{
        const id =req.params._id
        console.log('single id',id)
        const ingredientType=await ingredientTypeModel.findById(id);
        console.log('single ingrediant type by id',ingredientType);
    }catch(err){
        console.log(err);
    }
}

export const updateIngredientType=async (req,res)=>{
    try{
        const id =req.params._id
        console.log('update id',id)
        const updateData = req.body;
        const ingredientType=await ingredientTypeModel.findByIdAndUpdate(id,updateData,{new:true});
        console.log('update ingredient type',ingredientType)
        res.status(200).json(ingredientType);
    }catch(err){
        console.log(err);
    }
}
