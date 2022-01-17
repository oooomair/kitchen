import { useState } from 'react'
import {FiArrowLeft} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar2 = () => {

    const [droped, setDroped] = useState(false)

    const toggleDropDown = () => {
        setTimeout(() => {
            setDroped(!droped)
        }, 1);
    }

    document.body.addEventListener('click', () => { 
        if (droped) {
            setDroped(false)
        }
    })

    return (
        <div className='navbar'>
            <Link style={{ color:'inherit', textDecoration:'none' }} to={'/'} >
            <h6><FiArrowLeft /> THE KITCHEN</h6>
            </Link>
        </div>
    )
}

export default Navbar2
