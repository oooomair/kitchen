import { useState } from 'react'
import {BiDownArrow} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Navbar1 = () => {

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
            <h6>THE KITCHEN</h6>
            </Link>
            <div className={ droped ? 'droped-genre genre' : 'genre'}>
                <h2 onClick={toggleDropDown} >GENRE <BiDownArrow className='arrow' /> </h2>
                <ul className={ droped ? 'droped-nav-list nav-list' : 'nav-list'}>
                    <li> <a href="#1">Winter Comfort</a></li>
                    <li> <a href="#2">Summer Cool</a></li>
                    <li> <a href="#3">South Asian Flare</a></li>
                    <li> <a href="#4">Italian Sauce</a></li>
                    <li> <a href="#5">Burgers LOL</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar1
