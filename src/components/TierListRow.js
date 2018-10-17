import React from 'react';
import { Link } from 'react-router-dom';

const SingleTierList = ({ id, title, description, listOfCompetitors, displayName }) => (
    <div className="tier-list-row">
        <Link to={`/view/${id}`}>
        <h3 className="tier-list-title">{title}</h3>
        </Link>
        <p>By {displayName}</p>
        <p>{description}</p>
    </div>
)

export default SingleTierList
