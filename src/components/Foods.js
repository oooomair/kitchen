import React from 'react'
import { Link } from 'react-router-dom'

const Foods = ({genre, food}) => {
    return (
        <div className='food' >
            <Link className='router-link' to={`/eachfood/${genre._id}/${food._id}`}>
            <img src={food.image} alt="1" />
            <div className="food_content">
            <h3> {food.title} </h3>
            <p> {food.desc} </p>
            </div>
            </Link>
        </div>
    )
}

export default Foods
