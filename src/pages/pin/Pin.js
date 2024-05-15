import { useNavigate } from "react-router-dom";

export const Pin=()=>{
    let navigate=useNavigate()
    const handlePin=()=>{
        let pin=document.getElementById('input').value;
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
        navigate('/main')
    }
    const handleGeneratePin=()=>{
        navigate('/generatepin')
    }
    return(
        <div style={{height:"846px",width:"1492px", display:"flex", justifyContent:"center", alignItems:"center", boxSizing:"border-box"}}>
            <div>
                <input type="password" style={{height:"60px", width:"500px", border:"1px solid #fff", borderRadius:"12px", backgroundColor:"transparent",
                    boxSizing:"border-box", textAlign:"center", color:"#fff", fontFamily:"'Courier New', Courier, monospace"
                }}placeholder="Enter the Pin"  maxLength={4} minLength={4} id="input"/>
                <button type="submit" style={{position:"relative",left:"20px",top:"0"}} onClick={handlePin} className="button">Press here</button>
                <div className='pin-generation' style={{top:"300px", left:"-300px"}}>
                    <button className='main-button' style={{marginRight:"20px"}} onClick={handleGeneratePin}>Press Here</button>
                    <h1 >Generate Pin</h1>
                </div>
            </div>
        </div>
    )
}