import React from 'react';
import { Link } from 'react-router-dom';

const UserSingleTierList = ({ id, title, description, displayName }) => (
    <div>
        <Link to={`/viewTierList/${id}`}>
            <h3>{title}</h3>
        </Link> 
        <p>By {displayName}</p>
        <p>{description}</p>
    </div>
)

export default UserSingleTierList
