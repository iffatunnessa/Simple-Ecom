import React, { useContext, useEffect, useState } from 'react';
import { useRecoilState} from 'recoil';
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
    fetch(`https://boiling-crag-65640.herokuapp.com/getEmail?email=${email}`)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [email])

  return (
    <div>
      <p className="text-center text-2xl font-bold my-20">Welcome!</p>
    </div>
  );
};

export default Home;