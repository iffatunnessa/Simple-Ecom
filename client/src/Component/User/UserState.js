import { atom, selector } from 'recoil';

export const oldUserState = atom({
  key: 'oldUserState',
  default: [],
});

export const isOrder = atom({
  key: 'isOrder',
  default: false,
});

export const checkoutInDb = (cart, email) => {
  const userCart = {
    cart: cart,
    email: email
  };
  fetch(`https://boiling-crag-65640.herokuapp.com/checkout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userCart)
  })
    .then(res => console.log("cart with email added", res));
}