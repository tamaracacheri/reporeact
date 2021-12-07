import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const UseCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = ( item, quantity, count ) => {
        let flag = insInCart(item.item.id);
        if( flag === false ) {
            setCart([ ...cart, { item, quantity }]);
        } else {
            setCart((cart.filter(item => item.quantity = item.quantity + count)));
        }
    };

    const removeItem = ( id ) => {
        setCart(cart.filter(item => item.item.item.id !== id));
    };

    const clear = () => {
        setCart([]);
    };

    const insInCart = ( id ) => {
        let flag = false;
        cart.map(item => {
            if( item.item.item.id === id ) flag = true;
            return flag;
        });
        return flag;
    };

    const totalPrice = () => {
        let finalPrice = 0;
        cart.map(value => {
            finalPrice = finalPrice + (value.item.item.price + value.quantity);
            return finalPrice;
        })
    };

    return (
        <CartContext.Provider value = {{ addItem, removeItem, clear, insInCart, totalPrice, cart }}>
            { children }
        </CartContext.Provider>
    )
};