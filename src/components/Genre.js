import React from 'react'
import Foods from './Foods'

const Genre = ({genre}) => {
    return (
        <section id={genre._id}>
            <div className='genres'>
                <h1>{genre.title} <span> {genre.fire} </span> </h1>
                <h2> {genre.desc} </h2>
                <div className="foods">
                    {genre.foods.map(food => {
                        return <Foods genre={genre} food={food} key={food._id} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Genre
