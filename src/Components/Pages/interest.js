import { Button } from "react-bootstrap";
import './interest.css';
import { useState } from "react";

function Interest(){

    const [shopAmount, setShopAmount] = useState('')
    const [monthAmount, setMonthAmount] = useState('')
    const [result, setResult] = useState('')
    

   

    const getAmount = (e) => {
        setShopAmount(e.target.value)
    }

    const getMonths = (e) => {
        setMonthAmount(e.target.value)
    }

    
    function calculatePayment(){
        setResult((Number(shopAmount) + Number(shopAmount * .2) )/Number(monthAmount))
        
    }
   

    let resultText = <p>Borrowing £{shopAmount} for {monthAmount} months will give you a monthly payment of £{result} for a total amount paid of £{Number(shopAmount) + Number(shopAmount *.2)}.</p>



    return(
        <div className="interest-calc-container">
            <h2>Interest calculator</h2>
            <div className="input-container">
            <input placeholder="Purchase amount" onChange={getAmount}></input>
            <input placeholder="How many months?" onChange={getMonths}></input>
            <Button onClick={calculatePayment}>Calculate</Button>
            </div>
            <div className="interest-result">
                {resultText}
            </div>
        </div>
    )
}

export default Interest;