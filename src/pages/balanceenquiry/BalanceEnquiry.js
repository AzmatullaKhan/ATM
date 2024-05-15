import { useNavigate } from "react-router-dom";

export const BalanceEnquiry=()=>{
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
                    <p>Total amount available: xxxxxxxxxxx₹ only</p>
                    <p>Thank You</p>
                    <button className="main-button" onClick={handleWithdrawalEnd}>End Transaction</button>
                </div>
            </div>
        </div>
    )
}