import { useNavigate } from "react-router-dom";

export const PinChange=()=>{
    let navigate=useNavigate()

    // document.getElementById('pinchange-main').className='hidden'

    setTimeout(() => {
        document.getElementById('loading').className='hidden'
        document.getElementById('pinchange-main').className='visible'

    }, 5000);

    const handlePinChange=()=>{
        let original_pin=document.getElementById('input-original-pin').value;
        let new_pin=document.getElementById('input-new-pin').value;
        if(original_pin!==new_pin){
            if(check_pin(original_pin) && check_pin(new_pin)){
                document.getElementById('pinchange-main').className='hidden'
                document.getElementById('loading').className='visible'
                setTimeout(() => {
                    document.getElementById('loading').className='hidden'
                    document.getElementById('withdrawal-success').className='withdrawal-success-visible'
            
                }, 5000);
            }
        }
        else{
            alert('Enter different pins')
        }
    }
    function check_pin(pin){
        if(pin==="" || pin === " " || pin==="  " || pin==="   "|| pin=== "    "){
            alert('Enter some pin')
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

    const handlePinChangeEnd=()=>{
        navigate('/')
    }
    return(
        <div style={{height:"846px",width:"1492px", display:"flex", justifyContent:"center", alignItems:"center", boxSizing:"border-box"}}>
            <div className="hidden" id="pinchange-main">
            <input type="password" style={{height:"60px", width:"500px", border:"1px solid #fff", borderRadius:"12px", backgroundColor:"transparent",
                boxSizing:"border-box", textAlign:"center", color:"#fff", fontFamily:"'Courier New', Courier, monospace"
            }}placeholder="Enter the Old Pin"  maxLength={4} minLength={4} id="input-original-pin"/><br></br><br></br><br></br>
            <input type="password" style={{height:"60px", width:"500px", border:"1px solid #fff", borderRadius:"12px", backgroundColor:"transparent",
                boxSizing:"border-box", textAlign:"center", color:"#fff", fontFamily:"'Courier New', Courier, monospace"
            }}placeholder="Enter the New Pin"  maxLength={4} minLength={4} id="input-new-pin"/>
            <button type="submit" style={{position:"relative",left:"20px",top:"0"}} onClick={handlePinChange} className="button">Press here</button>


            </div>
            
            <div className='visible' id='loading' style={{textAlign:"center"}}>
                <div className='loading'></div>
                <p>Processing the request</p>
            </div>

            <div className="withdrawal-success-hidden" id="withdrawal-success">
                <p>Request Processed Successfully</p>
                <p >Pin Changed Successfully</p>
                <p>Thank You</p>
                <button onClick={handlePinChangeEnd} className="main-button">End Transaction</button>
            </div>
        </div>
    )
}