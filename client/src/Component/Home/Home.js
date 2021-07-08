import React, { useContext, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { UserContext } from '../../App';
import { cartState } from '../Cart/CartState';
import { oldUserState } from '../User/UserState';

const Home = () => {
  const [user, setUser] = useRecoilState(oldUserState);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [cart, setCart] = useRecoilState(cartState);
  const [showed, setShowed] = useState(false);
  const email = loggedInUser.email;
  useEffect(() => {
    fetch(`http://localhost:5000/getEmail?email=${email}`)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [email])

  return (
    <>
      <p className="center font-bold">Welcome!</p>
    </>
  );
};

export default Home;