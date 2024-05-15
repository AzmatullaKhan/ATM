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
                <div className='pin-generation'>
                    <button className='main-button' style={{marginRight:"20px"}}>Press Here</button>
                    <h1 >Generate Pin</h1>
                </div>
                <div className='mini-statement'>
                    <h1 >Mini Statement</h1>
                    <button className='main-button' onClick={handleMiniStatement}>Press Here</button>
                </div>
                <div className='deposit'>
                    <button className='main-button' style={{marginRight:"20px"}}>Press Here</button>
                    <h1 >Transfer</h1>
                </div>
                <div className='fast-cash'>
                    <h1 >Fast Cash</h1>
                    <button className='main-button'>Press Here</button>
                </div>
            </div>
        </div>
    )
}
//1.Fast Cash
// 2.Withdrawal
// 3.Balance enquiry
// 4.mini statement
// 5.

// Step 1: Insert ATM Card:
// Step 2: Select Language.
// Step 3: Enter 4-Digit ATM Pin:
// Step 4: Select the type of Transaction:
// Step 5: Select the Type of Account:
// Step 6: Enter the withdrawal amount.
// Step 7: Collect the Cash:
// Step 8: Take a printed receipt , if needed: