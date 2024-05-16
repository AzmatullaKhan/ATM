import { useNavigate } from 'react-router-dom';
import './Main.css'
export const MainPage=()=>{
    const navigate= useNavigate();

    setTimeout(() => {
        document.getElementById('loading').className='hidden'
        document.getElementById('main-content').className='visible'

    }, 5000);
    
    const handleWithdrawal=()=>{
        navigate('/withdrawal')
    }

    const handleBalanceEnquiry=()=>{
        navigate('/balanceenquiry')
    }

    const handleMiniStatement=()=>{
        navigate('/ministatement')
    }

    const handlePinChange=()=>{
        navigate('/pinchange')
    }

    const handleTransfer=()=>{
        navigate('/transfer')
    }

    const handleFastCash=()=>{
        navigate('/fastcash')
    }

    return(
        <div className="main-container">
            <div className='visible' id='loading' style={{textAlign:"center"}}>
                <div className='loading'></div>
                <p>Processing the request</p>
            </div>
            <div className='hidden' id='main-content'>
                <div className='withdrawal'>
                    <h1 >Withdrawal</h1>
                    <button className='main-button' onClick={handleWithdrawal}>Press Here</button>
                </div>
                <div className='pin-change'>
                    <button className='main-button' style={{marginRight:"20px"}} onClick={handlePinChange}>Press Here</button>
                    <h1 >Pin Change</h1>
                </div>
                <div className='balance-enquiry'>
                    <h1 >Balance enquiry</h1>
                    <button className='main-button' onClick={handleBalanceEnquiry}>Press Here</button>
                </div>
                <div className='deposit'>
                    <button className='main-button' style={{marginRight:"20px"}} onClick={handleTransfer}>Press Here</button>
                    <h1 >Transfer</h1>
                </div>
                <div className='mini-statement'>
                    <h1 >Mini Statement</h1>
                    <button className='main-button' onClick={handleMiniStatement}>Press Here</button>
                </div><br></br><br></br>
                <div className='fast-cash'>
                    <h1 >Fast Cash</h1>
                    <button className='main-button' onClick={handleFastCash}>Press Here</button>
                </div>
            </div>
            <footer>
                <p><a href="https://github.com/AzmatullaKhan">Copyright © All Rights Reserved 2024 Azmatulla Khan ®</a></p>
            </footer>
        </div>
    )
}