import './Main.css'
export const MainPage=()=>{
    setTimeout(() => {
        document.getElementById('loading').className='hidden'
    }, 2000);
    return(
        <div className="main-container">
            <div className='hidden' id='loading'>
                <div className='loading'></div>
                <p>Processing the request</p>
            </div>
            <div className='visible'>
                <h1>Withdrawal</h1>
            </div>
        </div>
    )
}
//1.Fast Cash
// 2.Withdrawal
// 3.Balance enquiry
// 4.mini statement
// 5.