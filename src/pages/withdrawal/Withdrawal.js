import { useNavigate } from 'react-router-dom';
import './zcss.css'
export const Withdrawal=()=>{
    const navigate= useNavigate();
    setTimeout(() => {
        document.getElementById('loading').className='hidden'
        document.getElementById('withdrawal-content').className='visible'

    }, 5000);
    const handleWithdrawalSavings=()=>{
        navigate('/savings')
    }
    const handleWithdrawalCurrent=()=>{
        navigate('/current')
    }
    const handleWithdrawalKCC=()=>{
        navigate('/kcc')
    }
    return(
        <div className='withdrawal-main'>
            <div className='visible' id='loading' style={{textAlign:"center"}}>
                <div className='loading'></div>
                <p>Processing the request</p>
            </div>
            <div id='withdrawal-content' className='hidden'>
                <div className='withdrawal-savings'>
                    <h1 >Savings</h1>
                    <button className='main-button' onClick={handleWithdrawalSavings}>Press Here</button>
                </div><br></br>
                <div className='withdrawal-current'>
                    <h1 >Current</h1>
                    <button className='main-button' onClick={handleWithdrawalCurrent}>Press Here</button>
                </div><br></br>
                <div className='withdrawal-kcc'>
                    <h1 >KCC</h1>
                    <button className='main-button' onClick={handleWithdrawalKCC}>Press Here</button>
                </div><br></br>
            </div>
            <footer>
                <p><a href="https://github.com/AzmatullaKhan">Copyright © All Rights Reserved 2024 Azmatulla Khan ®</a></p>
            </footer>
        </div>
    )
}