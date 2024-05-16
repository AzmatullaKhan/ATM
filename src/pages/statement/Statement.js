import { useNavigate } from "react-router-dom";

export const MiniStatement=()=>{
    const navigate=useNavigate()
    setTimeout(() => {
        document.getElementById('loading').className='hidden'
        document.getElementById('main-content').className='visible'

    }, 5000);
    
    const handleWithdrawalEnd = ()=>{
        navigate('/')
    }

    return(
        <div className="main-container">
            <div className='visible' id='loading' style={{textAlign:"center"}}>
                <div className='loading'></div>
                <p>Processing the request</p>
            </div>
            <div className='hidden' id='main-content'>
                <div className="withdrawal-success-visible" style={{position:"relative"}}>
                    <p>Request Processed Successfully</p>
                    <p>Statement 1</p>
                    <p>Statement 2</p>
                    <p>Statement 3</p>
                    <p>Statement 4</p>
                    <p>Statement 5</p>
                    <button className="main-button" onClick={handleWithdrawalEnd}>End Transaction</button>
                </div>
            </div>
            <footer>
                <p><a href="https://github.com/AzmatullaKhan">Copyright © All Rights Reserved 2024 Azmatulla Khan ®</a></p>
            </footer>
        </div>
    )
}