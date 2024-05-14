import { useNavigate } from "react-router-dom";

export const AmountDeducted=()=>{
    setTimeout(() => {
        document.getElementById('loading').className='hidden'
        document.getElementById('amountdeducted-content').className='visible'

    }, 5000);

    let navigate=useNavigate()
    const handleAmount=()=>{
        alert('Amount deduction succefull')
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
                        }}placeholder="Enter the Amount" id="input"
                    />
                    <button type="submit" style={{position:"relative",left:"20px",top:"0"}} className="button" onClick={handleAmount}   >Press here</button>
                </div>
            </div>
        </div>
    )
}