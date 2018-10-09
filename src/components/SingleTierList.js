import React from 'react';
import { Link } from 'react-router-dom';

const SingleTierList = ({ id, title, description }) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{title}</h3><br></br>
        <p>{description}</p>
        </Link>
    </div>
)

export default SingleTierList
