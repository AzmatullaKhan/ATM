import { useNavigate } from "react-router-dom";

export const Transfer=()=>{
    let navigate=useNavigate()

    // document.getElementById('pinchange-main').className='hidden'

    setTimeout(() => {
        document.getElementById('loading').className='hidden'
        document.getElementById('pingenerate-main').className='visible'

    }, 5000);

    const handlePinGenerate=()=>{
        let otp=document.getElementById('input-otp').value;
        let input_pin=document.getElementById('input-pin').value;
        if(check_pin(otp)){
            document.getElementById('input-otp').className='hidden'
            document.getElementById('input-pin').className='visible'
            if(check_pin(input_pin)){
                document.getElementById('pingenerate-main').className='hidden'
                document.getElementById('loading').className='visible'
                document.getElementById('transfer-message').textContent="Money "+input_pin+"₹ transferred to "+otp;
                setTimeout(() => {
                    document.getElementById('loading').className='hidden'
                    document.getElementById('pingenerate-success').className='withdrawal-success-visible'
                }, 5000);
            }
        }
    }
    function check_pin(pin){
        if(pin==="" || pin === " " || pin==="  " || pin==="   "|| pin=== "    "){
            alert('Enter Amount')
            return false
        }
        for(let i=0;i<pin.length;i++){
            if(!(pin[i]>='0' && pin[i]<='9')){
                alert('Only numeric values supported')
                return false;
            }
        }
        return true
    }

    const handlePinGenerateEnd=()=>{
        navigate('/')
    }
    return(
        <div style={{height:"846px",width:"1492px", display:"flex", justifyContent:"center", alignItems:"center", boxSizing:"border-box"}}>
            <div className="hidden" id="pingenerate-main">
                <input type="number" style={{height:"60px", width:"500px", border:"1px solid #fff", borderRadius:"12px", backgroundColor:"transparent",
                    boxSizing:"border-box", textAlign:"center", color:"#fff", fontFamily:"'Courier New', Courier, monospace"
                }}placeholder="Enter the account number (12 numbers)"  max={999999999999} min={100000000000} id="input-otp"/><br></br><br></br><br></br>

                <input type="number" style={{height:"60px", width:"500px", border:"1px solid #fff", borderRadius:"12px", backgroundColor:"transparent",
                    boxSizing:"border-box", textAlign:"center", color:"#fff", fontFamily:"'Courier New', Courier, monospace"
                }}placeholder="Enter the amount" id="input-pin" className="hidden"/><br></br><br></br><br></br>
                <button type="submit" style={{position:"relative",left:"20px",top:"0"}} className="button" onClick={handlePinGenerate}>Press here</button>
            </div>
            
            <div className='visible' id='loading' style={{textAlign:"center"}}>
                <div className='loading'></div>
                <p>Processing the request</p>
            </div>

            <div className="withdrawal-success-hidden" id="pingenerate-success">
                <p>Request Processed Successfully</p>
                <p id='transfer-message'></p>
                <p>Thank You</p>
                <button onClick={handlePinGenerateEnd} className="main-button">End Transaction</button>
            </div>
        </div>
    )
}