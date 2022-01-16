import { useState } from 'react'
import {BiDownArrow} from 'react-icons/bi'

const Navbar = () => {

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
            <h1>THE KITCHEN</h1>
            <div className={ droped ? 'droped-genre genre' : 'genre'}>
                <h2 onClick={toggleDropDown} >GENRE <BiDownArrow className='arrow' /> </h2>
                <ul className={ droped ? 'droped-nav-list nav-list' : 'nav-list'}>
                    <li>Winter Comfort</li>
                    <li>Summer Cool</li>
                    <li>South Asian Flare</li>
                    <li>Italian Sauce</li>
                    <li>Burgers LOL</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
