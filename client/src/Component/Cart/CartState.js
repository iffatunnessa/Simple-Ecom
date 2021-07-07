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
      quantity: cart[productIndex].quantity + quantity,
    };
    return newCartList;
  }

  newCartList.push({
    product: product,
    quantity: quantity,
  });
  return newCartList;
};

export const cartCalculation=(cart)=>{
  let total = 0;
    cart.forEach(item => {
        const { product, quantity } = item;
        const { price} = product;
        total = total + price*quantity;
        console.log(total);
    });
    return total;
}

export const addCartInDatabase = (cart,email) => { 
  fetch(`http://localhost:5000/addCartInDatabase?email=${email}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cart)
  })
      .then(res => console.log("added (client)", res));
}