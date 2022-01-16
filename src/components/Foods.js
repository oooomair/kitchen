import React from 'react'

const Foods = ({food}) => {
    return (
        <div className='food' >
            <img src={food.image} alt="1" />
            <div className="food_content">
            <h3> {food.title} </h3>
            <p> {food.desc} </p>
            </div>
        </div>
    )
}

export default Foods
