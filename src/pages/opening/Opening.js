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
           <button onClick={navigateMain}>Insert the card</button>
        </div>
    )
}