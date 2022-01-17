import Intro from "./Intro"
import Main from "./Main"
import Navbar1 from './Navbar1';

const Home = () => {
    return (
        <div className='home'>
            <Navbar1/>
            <Intro/>
            <Main/>
        </div>
    )
}

export default Home
