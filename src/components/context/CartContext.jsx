import { React, useState, useContext, createContext} from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)


export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    const addItem = (item, quantity) =>{
        if(isInCart(item.id)){
            setCart(cart.map(product=>{
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            })); 
        }else{
            setCart([...cart, {...item, quantity}])
        }
    }

    const clear = () => setCart([]);

    const isInCart = (id) => cart.some(product => product.id === id) 

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

    const totalProducts = () => cart.reduce((collector, product)=> collector + product.quantity,0);

    const totalPrice = () => cart.reduce((prev, act)=>prev + act.quantity * act.price, 0)



return (
    <CartContext.Provider value={{
        clear,
        isInCart,
        removeItem,
        addItem,
        totalProducts,
        totalPrice,
        cart,
    }}>
        {children}
    </CartContext.Provider>
)
}