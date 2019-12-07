import React from "react";
import { Jumbotron } from 'reactstrap';
import { useSelector } from 'react-redux';
import UserEventList from './UserEventList';

const UserProfile = () => {
    const users = useSelector(state => state.users)
    const user = users.filter(user => user.id === 1)[0]

    return (
        <div>
            <Jumbotron className="m-3">
                <h1 className="display-3">{user && user.name}</h1>
                <p>{user && user.phone}</p>
                <p>{user && user.email}</p>
            </Jumbotron>
            <UserEventList user={user} />
        </div>
    )
};

export default UserProfile;