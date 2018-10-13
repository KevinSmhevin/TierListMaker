import React from 'react';
import { Link } from 'react-router-dom';

const SingleTierList = ({ id, title, description, listOfCompetitors }) => (
    <div>
        <Link to={`/view/${id}`}>
        <h3>{title}</h3><br></br>
        </Link>
        <p>{description}</p>
    </div>
)

export default SingleTierList
