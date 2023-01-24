//imports
import { Button } from "react-bootstrap";
import './interest.css';
import { useState } from "react";

function Interest(){
    //State of inputs 
    const [shopAmount, setShopAmount] = useState('')
    const [monthAmount, setMonthAmount] = useState('')
    const [resultText, setResultText] = useState('')
   
    //Get values from inputs
    const getAmount = (e) => {
        setShopAmount(e.target.value)
    }

    const getMonths = (e) => {
        setMonthAmount(e.target.value)
    }
    //Do calculation
    function calculatePayment(){
        return (Math.round(((Number(shopAmount) + Number(shopAmount * .2) )/Number(monthAmount))*100)/100).toFixed(2)
    }
    //Show result of calculation in DOM
    function showResult(){
        setResultText(<p>Borrowing £{shopAmount} for {monthAmount} months will give you a monthly payment of £{calculatePayment()} for a total amount paid of £{Number(shopAmount) + Number(shopAmount *.2)}.</p>)
    }
   
    return(
        <div className="interest-calc-container">
            <h2>Interest calculator</h2>
            <div className="input-container">
            <input placeholder="Purchase amount" onChange={getAmount}></input>
            <input placeholder="How many months?" onChange={getMonths}></input>
            <Button onClick={showResult}>Calculate</Button>
            </div>
            <div className="interest-result">
                {resultText}
            </div>
        </div>
    )
}

export default Interest;