import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const currency = '$';
    const deliveryFee = 10;
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();


    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            if (response.data.success) {
                setProducts(response.data.products);
            }
            else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(response.data.message);
        }
    }

    const addToCart = async (itemId) => {

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId]) {
                cartData[itemId] += 1;
            }
            else {
                cartData[itemId] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId] = 1;
        }

        setCartItems(cartData);

        if(token){
            try {
                await axios.post(backendUrl + '/api/cart/add', {itemId}, {headers:{token}})
                
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {

            try {
                if (cartItems[items] > 0) {
                    totalCount += cartItems[items];
                }
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }

        }

        return totalCount;
    }

    const getUserCart = async (token) => {
        try {
            
            const response = await axios.post(backendUrl + '/api/cart/get', {}, {headers:{token}});
            if(response.data.success){
                setCartItems(response.data.cartData);
            }
            
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const updateQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);

        cartData[itemId] = quantity;

        setCartItems(cartData);
        if(token){
            try{
                await axios.post(backendUrl + '/api/cart/update', {itemId, quantity}, {headers:{token}});
            } catch (error){
                console.log(error);
                toast.error(error.message);
            }
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);

            try {
                if (cartItems[items] > 0) {
                    totalAmount += itemInfo.price * cartItems[items];
                }
            }
            catch (error) {
                console.log(error);
            }

        }

        return totalAmount;
    }


    useEffect(() => {
        getProductsData();
    }, [])

    useEffect(()=>{
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));
            getUserCart(localStorage.getItem('token'));
        }
    }, [])

    const value = {
        products, currency, deliveryFee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, setCartItems,
        getCartCount, updateQuantity,
        getCartAmount, navigate,
        token, setToken,
        backendUrl,
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;