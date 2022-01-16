import React from 'react'
import Foods from './Foods'

const Genre = ({genre}) => {
    return (
        <div>
            <div className='genres'>
                <h1>{genre.title} <span> {genre.fire} </span> </h1>
                <h2> {genre.desc} </h2>
                <div className="foods">
                    {genre.foods.map(food => {
                        return <Foods food={food} key={food._id} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Genre
