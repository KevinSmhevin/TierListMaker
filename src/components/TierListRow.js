import React from 'react';
import { Link } from 'react-router-dom';

const SingleTierList = ({ id, title, description, listOfCompetitors, displayName }) => (
    <div>
        <Link to={`/view/${id}`}>
        <h3>{title}</h3>
        </Link>
        <p>By {displayName}</p>
        <p>{description}</p>
    </div>
)

export default SingleTierList
