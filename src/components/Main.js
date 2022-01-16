import { useContext } from 'react'
import { GlobalContext } from '../context/Global'
import Genre from './Genre'

const Main = () => {

    const data = useContext(GlobalContext)

    return (
        <div className='main'>
            {data.map(genre => {
                return <Genre genre={genre} key={genre._id} />
            })}
        </div>
    )
}

export default Main
