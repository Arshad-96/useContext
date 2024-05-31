import React, { createContext,useEffect,useState } from 'react'
import axios from 'axios';
let ProductContex = createContext();

export const ProductProvider = ({children}) => {
    
const [products,setProducts] = useState([])
const [loading,setLoding]=useState(true)
const [cart,setCart] = useState([])
const [price, setPrice] = useState(0);

const handlePrice = ()=>{
    let total = 0;
    cart.map((item)=>(
        total += item.quantity * item.price
    ))
    setPrice(total);
}
  
  useEffect(()=>{
    handlePrice()
  })

useEffect(()=>{
    const getProducts = async () => {
        try {
          const productsData = await axios.get('https://fakestoreapi.com/products');
          const updatedProducts = productsData.data.map((product) => ({
            ...product,
            quantity: 1,
          }));
          setProducts(updatedProducts);       
        } catch (error) {
          console.log(error);
        }
        finally {
            setLoding(false)
        }
      };
      getProducts();
      
},[])


const handleAddToCart = (product) =>{
    setCart([...cart, product]);
    
}
const handleRemoveToCart=(product) => setCart(cart.filter((item)=>item.id !== product.id));
  

  const handleChange = (item, Qty) => {
    const updatedCart = cart.map((data) => {
      if (data.id === item.id) {
        const updatedQuantity = data.quantity + Qty;
        return {
          ...data,
          quantity: updatedQuantity > 0 ? updatedQuantity : 1,
        };
      }
      return data;
    });

    setCart(updatedCart);
  };

  return (
    <ProductContex.Provider value={{products,loading,handleAddToCart,cart,handleRemoveToCart,handleChange,price}}>
        {children}
    </ProductContex.Provider>
  )
}

export default ProductContex