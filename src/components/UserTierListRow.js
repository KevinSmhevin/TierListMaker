import React from 'react';
import { Link } from 'react-router-dom';

const UserSingleTierList = ({ id, title, description, displayName }) => (
    <div className="tier-list-row">
        <Link to={`/viewTierList/${id}`}>
            <h3 className="tier-list-title clickable">{title}</h3>
        </Link> 
        <p>{description}</p>
        {/* <p className="author">By {displayName}</p> */}
    </div>
)

export default UserSingleTierList
