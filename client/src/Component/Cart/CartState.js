import { atom, selector } from 'recoil';

export const cartState = atom({
  key: 'cartState',
  default: [],
});

export const addToCart = (cart, product, quantity, email) => {
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

export const updateCart = (cart, product, quantity) => {
  const newCartList = [...cart];
  const productIndex = cart.findIndex(newProduct => newProduct.product._id === product._id);

  if (productIndex >= 0) {
    newCartList[productIndex] = {
      ...cart[productIndex],
      quantity: quantity,
    };
    console.log(cart, cart[productIndex].quantity)
    return newCartList;
  }

  newCartList.push({
    product: product,
    quantity: quantity,
  });
  return newCartList;
};

export const deleteFromCart = (cart, product) => {
  const newCartList = [...cart];
  const productIndex = cart.findIndex(newProduct => newProduct.product._id === product._id);

  newCartList.splice(productIndex, 1);
  return newCartList;
};

export const cartCalculation = (cart) => {
  let total = 0;
  cart.forEach(item => {
    const { product, quantity } = item;
    const { price } = product;
    total = total + price * quantity;
  });
  return total;
}

export const addCartInDatabase = (cart, email) => {
  const userCart = {
    cart: cart,
    email: email
  };
  fetch(`http://localhost:5000/addCartInDatabase`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userCart)
  })
    .then(res => console.log("cart with email added", res));
}

export const updateCartInDb = (cart, email) => {
  const userCart = {
    cart: cart,
    email: email
  };
  console.log(userCart);
  fetch(`http://localhost:5000/updateCart?email=${email}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userCart })
  })
    .then(res => res.json())
    .then(data => console.log(data))
}

export const deleteCartFromDb = (email) => {
  fetch(`http://localhost:5000/deleteCart?email=${email}`, {
    method: 'DELETE',
  })
    .then(res => res.json())
    .then(data => console.log(data))
}