import userModel from "../models/userModel.js";

const addToCart = async (req, res) =>{
    try {
        
        const {userId, itemId} = req.body;

        const userData = await userModel.findById(userId);

        let cartData = await userData.cartData;

        if(cartData[itemId]){
            cartData[itemId]++;
        }
        else {
            cartData[itemId] = 1;    
        }

        await userModel.findByIdAndUpdate(userId, {cartData});
        res.json({success:true, message: 'Added to cart'})

    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message});
    }
}

const updateCart = async (req, res) =>{
    try {
            const {userId, itemId, size, quantity} = req.body;
            const userData = await userModel.findById(userId);

            let cartData = await userData.cartData;

            cartData[itemId] = quantity;

            await userModel.findByIdAndUpdate(userId, {cartData});
            res.json({success:true, message: 'Updated cart'})

    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message});
    }
}

const getUserCart= async (req, res) =>{
    try {
        const {userId} = req.body;
        const userData = await userModel.findById(userId);

        let cartData = await userData.cartData;

        res.json({success:true, cartData});


    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message});
    }
}

export {addToCart, updateCart, getUserCart}