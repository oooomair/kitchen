import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/Global'
import Navbar2 from './Navbar2';


const EachFood = () => {

    const {genreId, foodId} = useParams();

    const [theFood, setTheFood] = useState('')

    const data = useContext(GlobalContext)

    useEffect(() => {
        const genre = data.filter(genre => genre._id == genreId )
        const food = genre[0].foods.filter(food => food._id == foodId )
        setTheFood(food[0])  
    }, [data, foodId, genreId])

     return (
        <div className='each-food'>
            <Navbar2/>
            <h1> {theFood.title} </h1>
            <div className="main-content">
            <img src={theFood.image} alt="" />
            <h2> {theFood.desc} </h2>
            </div>
            <div className="IM">
            <div className="IM-content">
            <h5>Ingredients:</h5>
            <h4> {theFood.ingredients} </h4>
            </div>
            <div className="IM-content">
            <h5>Directions:</h5>
            <h4> {theFood.method} </h4>
            </div>
            </div>
        </div>
    )
}

export default EachFood
