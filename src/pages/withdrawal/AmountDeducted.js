import { useNavigate } from "react-router-dom";

export const AmountDeducted=()=>{

    const navigate=useNavigate()

    setTimeout(() => {
        document.getElementById('loading').className='hidden'
        document.getElementById('amountdeducted-content').className='visible'

    }, 5000);
    const handleAmount=()=>{
        let amount= Number(document.getElementById('amount-input').value);
        if(amount%100===0 && amount!==0){
            document.getElementById('amountdeducted-content').className='hidden'
            document.getElementById('loading').className='visible'

            document.getElementById('message').textContent="Total amount deducted: "+amount+"₹ only"

            setTimeout(() => {
                document.getElementById('loading').className='hidden'
                document.getElementById('withdrawal-success').className='withdrawal-success-visible'
        
            }, 5000);
        }
        else{
            alert('Enter the amount that can be divisible by 100 or 500')
        }
    }

    const handleWithdrawalEnd = ()=>{
        navigate('/')
    }

    return(
        <div className='withdrawal-main'>
            <div className='visible' id='loading' style={{textAlign:"center"}}>
                <div className='loading'></div>
                <p>Processing the request</p>
            </div>
            <div id='amountdeducted-content' className='hidden'>
                <div style={{height:"846px",width:"1492px", display:"flex", justifyContent:"center", alignItems:"center", boxSizing:"border-box"}}>
                    <input type="number" style={{height:"60px", width:"500px", border:"1px solid #fff", borderRadius:"12px", backgroundColor:"transparent",
                        boxSizing:"border-box", textAlign:"center", color:"#fff", fontFamily:"'Courier New', Courier, monospace"
                        }}placeholder="Enter the amount that can be divisible by 100 or 500" id="amount-input" minLength={3}
                    />
                    <button type="submit" style={{position:"relative",left:"20px",top:"0"}} className="button" onClick={handleAmount}   >Press here</button>
                </div>
            </div>
            <div className="withdrawal-success-hidden" id="withdrawal-success">
                <p>Amount deducted Successfully</p>
                <p id='message'>Total amount deducted:</p>
                <p>Thank You</p>
                <button onClick={handleWithdrawalEnd} className="main-button">End Transaction</button>
            </div>
        </div>
    )
}