import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const UseCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    let flag = insInCart(item.item.id);
    if (flag === false) {
      setCart([...cart, { item, quantity }]);
    } else {
      let index = cart.findIndex((prod) => prod.item.item.id === item.item.id);
      let newQuantity = cart[index].quantity + quantity;
      if (newQuantity <= item.item.stock) {
        cart[index].quantity = newQuantity;
      } else {
        alert(
          "There is not enough stock of this product. Try to buy less quantity"
        );
      }
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.item.item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const insInCart = (id) => {
    let flag = false;
    cart.map((item) => {
      if (item.item.item.id === id) flag = true;
      return flag;
    });
    return flag;
  };

  const itemsSumatoryInCart = () => {
    let value = 0;
    cart.map((item) => (value = item.quantity + value));
    return value;
  };

  const totalPrice = () => {
    let finalPrice = 0;
    cart.map((value) => {
      finalPrice = finalPrice + value.item.item.price * value.quantity;
      return finalPrice;
    });
    return finalPrice;
  };

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clearCart,
        insInCart,
        itemsSumatoryInCart,
        totalPrice,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
