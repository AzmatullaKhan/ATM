import './Opening.css'
import { useNavigate } from 'react-router-dom';

export const Opening=()=>{
    const navigate= useNavigate()
    const navigateMain=()=>{
        navigate('pin')
    }
    return(
        <div className='main-container'>
           <img src={require('../../images/opening-bacground.jpg')} className='image' alt='opening-background'/>
           <button onClick={navigateMain} className='button'>Insert the card</button>
           <footer>
                <p><a href="https://github.com/AzmatullaKhan">Copyright © All Rights Reserved 2024 Azmatulla Khan ®</a></p>
            </footer>
        </div>
    )
}