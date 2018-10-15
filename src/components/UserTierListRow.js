import React from 'react';
import { Link } from 'react-router-dom';

const UserSingleTierList = ({ tierListId, title, description, displayName }) => (
    <div>
        <Link to={`/viewTierList/${tierListId}`}>
            <h3>{title}</h3>
        </Link> 
        <p>By {displayName}</p>
        <p>{description}</p>
    </div>
)

export default UserSingleTierList
