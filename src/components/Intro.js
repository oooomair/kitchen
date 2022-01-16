import frame from '../assets/frames/Frame.svg'
import frame_1700 from '../assets/frames/Frame-1700.svg'
import frame_1500 from '../assets/frames/Frame-1500.svg'
import frame_1200 from '../assets/frames/Frame-1200.svg'
import frame_1000 from '../assets/frames/Frame-1000.svg'
import frame_800 from '../assets/frames/Frame-800.svg'
import frame_550 from '../assets/frames/Frame-550.svg'
import frame_420 from '../assets/frames/Frame-420.svg'
import frame_370 from '../assets/frames/Frame-370.svg'

const Intro = () => {
    return (
        <div className='intro'>
            <img className='frame frame-2000' src={frame} alt="frame" />
            <img className='frame frame-1700' src={frame_1700} alt="frame" />
            <img className='frame frame-1500' src={frame_1500} alt="frame" />
            <img className='frame frame-1200' src={frame_1200} alt="frame" />
            <img className='frame frame-1000' src={frame_1000} alt="frame" />
            <img className='frame frame-800' src={frame_800} alt="frame" />
            <img className='frame frame-550' src={frame_550} alt="frame" />
            <img className='frame frame-420' src={frame_420} alt="frame" />
            <img className='frame frame-370' src={frame_370} alt="frame" />
            <div className="intro__text">
                <h1>A little about <span>ME</span></h1>
                <p>
                I am a <span>home cook</span> that has cooked food as
                many times as you can count on your fingers,
                I have cooked dishes that range from fried 
                eggs to instant noodles, I like my moms food
                so I will share some of them and some random
                dishes that look good on this world wide web
                here Thanks for looking at my page I truly
                appreciate it.
                </p>
            </div>
        </div>
    )
}

export default Intro
