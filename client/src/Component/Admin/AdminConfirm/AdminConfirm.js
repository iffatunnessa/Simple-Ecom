import React, { useContext, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { UserContext } from '../../../App';
import { isAdmin } from '../AdminState';

const AdminConfirm = () => {
    const [admin, setAdmin] = useRecoilState(isAdmin);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://boiling-crag-65640.herokuapp.com/admin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAdmin(data));
    }, [])
    return (
        <div>
        </div>
    );
};

export default AdminConfirm;