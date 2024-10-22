import menuModel from '../../model/Menu/menu.js'

export const addMenu = async (req, res) => {
    try {
        const menu = await new menuModel(req.body)
        await menu.save()
        console.log('add menu...')
        res.status(201).json(menu)
    } catch (error) {
        res.status(400).json({ message: 'Error adding menu', error: error.message })
    }
}

export const getAllMenu = async (req, res) => {
    try {
        const menu = await menuModel.find()
        console.log('get all menu...',menu);
        res.status(200).json(menu)
    } catch (error) {
        res.status(500).json({ message: 'Error getting menu', error: error.message })
    }
}


export const singleMenu = async (req,res)=>{
    try{
        const id = req.params.id;
        console.log(id,'id');
        const menu = await menuModel.findById(id);
        console.log('single menu...',menu)
        res.status(200).json(menu);

    }
    catch(err){
        res.status(400).json(err);
    }
}


export const updateMenu = async (req,res)=>{
    try{
        const id = req.params.id;
        console.log(id,'id');
        const updateData = req.body;
        const menu = await menuModel.findByIdAndUpdate(id,updateData,{new:true})
        console.log('update menu...',menu)
        res.status(200).json(menu);

    }
    catch(err){
        res.status(400).json(err);
    }
}

export const deleteMenu = async (req,res)=>{
    try{
        const id=req.params._id;
        const deleteMenu= await menuModel.findByIdAndDelete(id);
        console.log('delete menu....');
        res.status(200).json(deleteMenu);
    }catch(err){
        res.status(400).json(err);
    }
}