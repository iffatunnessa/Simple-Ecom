import { atom, selector } from 'recoil';

export const cartState = atom({
    key: 'cartState',
    default: [],
});

export const addToCart = (cart, product, quantity) => {
    const newCartList = [...cart];
    const productIndex = cart.findIndex(newProduct => newProduct.product._id === product._id);
    
    if (productIndex >= 0) {
        newCartList[productIndex] = {
        ...cart[productIndex],
        quantity: cart[productIndex].quantity + 1,
      };
      return newCartList;
    }

    newCartList.push({
      product: product,
      quantity: quantity,
    });
    return newCartList;
  };