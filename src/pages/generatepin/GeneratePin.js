import { useNavigate } from "react-router-dom";

export const GeneratePin=()=>{
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
                setTimeout(() => {
                    document.getElementById('loading').className='hidden'
                    document.getElementById('pingenerate-success').className='withdrawal-success-visible'
                }, 5000);
            }
        }
    }
    function check_pin(pin){
        if(pin==="" || pin === " " || pin==="  " || pin==="   "|| pin=== "    "){
            alert('Enter pin')
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
                <input type="password" style={{height:"60px", width:"500px", border:"1px solid #fff", borderRadius:"12px", backgroundColor:"transparent",
                    boxSizing:"border-box", textAlign:"center", color:"#fff", fontFamily:"'Courier New', Courier, monospace"
                }}placeholder="Enter the OTP sent to your registered Mobile (Length 6)"  maxLength={6} minLength={6} id="input-otp"/><br></br><br></br><br></br>

                <input type="password" style={{height:"60px", width:"500px", border:"1px solid #fff", borderRadius:"12px", backgroundColor:"transparent",
                    boxSizing:"border-box", textAlign:"center", color:"#fff", fontFamily:"'Courier New', Courier, monospace"
                }}placeholder="Enter the Pin"  maxLength={4} minLength={4} id="input-pin" className="hidden"/><br></br><br></br><br></br>
                <button type="submit" style={{position:"relative",left:"20px",top:"0"}} className="button" onClick={handlePinGenerate}>Press here</button>
            </div>
            
            <div className='visible' id='loading' style={{textAlign:"center"}}>
                <div className='loading'></div>
                <p>Processing the request</p>
            </div>

            <div className="withdrawal-success-hidden" id="pingenerate-success">
                <p>Request Processed Successfully</p>
                <p >Pin Changed Successfully</p>
                <p>Thank You</p>
                <button onClick={handlePinGenerateEnd} className="main-button">End Transaction</button>
            </div>
            <footer>
                <p><a href="https://github.com/AzmatullaKhan">Copyright © All Rights Reserved 2024 Azmatulla Khan ®</a></p>
            </footer>
        </div>
    )
}