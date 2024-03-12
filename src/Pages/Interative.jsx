import React, { useState } from "react";
import "../CSS/Interactive.css";
import front from "../assets/images/bg-card-front.png";
import back from "../assets/images/bg-card-back.png";
import cardLogo from "../assets/images/card-logo.svg";
import ThankYou from "../conponent/ThankYou";

const Interative = () => {
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState("Jane Appleseed");
  const [number, setNumber] = useState("0000 0000 0000 0000");
  const [MM, setMM] = useState("00");
  const [YY, setYY] = useState("00");
  const [CVV, setCVV] = useState("000");

  const [nameERR, setNameERR] = useState('')
  const [numberERR, setnumberERR] = useState('')
  const [dateERR, setdateERR] = useState('')
  const [cvvERR, setcvvERR] = useState('')



function Validate() {
        const nameInput = name.trim()
        const cardInput = number.trim()
        const mmInput = MM.trim()
        const yyInput = YY.trim()
        const cvvInput = CVV.trim()

        const nameBox = document.querySelector('#name-box')
        const numberBox = document.querySelector('#number-box')
        const mmBox = document.querySelector('#mm-box')
        const yyBox = document.querySelector('#yy-box')
        const cvvBox = document.querySelector('#cvv-box')

        //Validate for name
        if(nameInput.length <= 0){
          setNameERR(`Can't be blank`);
          nameBox.style.border ='2px solid red';
        }else if(nameInput.length <= 5){
            console.log('passed')
            setNameERR('Enter a valid name')   
            nameBox.style.border ='2px solid red';
        }else{
          setNameERR('')
          console.log('okay')
          nameBox.style.border ='2px solid black';

        }
    
        // Validate for number
        const regex = /^[0-9]+$/;
        if(cardInput.length <= 0){
          setnumberERR(`Can't be blank`)
          numberBox.style.border ='2px solid red';
        }else if (cardInput.length <= 18) {
          setnumberERR('Wrong format, numbers only')
          numberBox.style.border ='2px solid red';
        }else if(regex.test(number)){
          setnumberERR('Wrong format, numbers only')
          numberBox.style.border ='2px solid red';
        }else{
          setnumberERR('')
          numberBox.style.border ='2px solid black';
        }

        //Validate for date
        if (mmInput.length <= 0 && yyInput.length <= 0) {
          setdateERR(`Can't be blank`)
          mmBox.style.border ='2px solid red';
        }else if(mmInput.length <= 0){
          setdateERR(`Can't be blank`)
          mmBox.style.border ='2px solid red';
        }else if(mmInput > 12){
          setdateERR('Invalid month')
          mmBox.style.border ='2px solid red';
        }else if(yyInput.length <= 0){
          setdateERR(`Can't be blank`)
          yyBox.style.border ='2px solid red';
        }else if(yyInput <= 23){
          setdateERR(`Expired card`)
          yyBox.style.border ='2px solid red';
        }else{
          setdateERR('')
          mmBox.style.border ='2px solid black';
          yyBox.style.border ='2px solid black';
        }
        //Validate for Cvv
        if(cvvInput.length <= 0){
          setcvvERR(`Can't be blank`)
          cvvBox.style.border ='2px solid red';
        }else if(cvvInput.length <= 2){
          setcvvERR(`Invalid`)
          cvvBox.style.border ='2px solid red';
        }else{
          setcvvERR('')
        }

        const nameInputValid = name.length >= 5
        const cardInputValid = number.length <= 19 
        const dateInputValid = MM >=1 && MM <= 12 && YY >= 23
        const cvvInputValid = CVV.length === 3

        console.log(nameInputValid);
        console.log(cardInputValid);
        console.log(dateInputValid);
        console.log(cvvInputValid);
        
        return nameInputValid && cardInputValid && dateInputValid && cvvInputValid

    }


  const handleSubmit = (e) => {
    // e.preventDefault()
    if(!Validate()){
        e.preventDefault()
        // setConfirmed(true)
        console.log('Not True')
    }else {
        setConfirmed(true)
        console.log('All true');
    }
   
    }


        

  return (
    <>
      <div className="container">
        <div className="left">
          {/* <img src={bgmobile} /> */}
        </div>
        <div className="front">

        </div>
        <div className="front">
          <img src={front} title="card details" className="front-card" height='100%' width='100%'/>
          <span>
            <img src={cardLogo} />
          </span>
          <p className="card-number">{number}</p>
          <p className="card-name">{name.toUpperCase()}</p>
          <p className="card-date">
            {MM}/{YY}
          </p>
        </div>
        <div className="back">
          <img src={back} title="card details" className="back-card" height='100%' width='100%'/>
          <p className="card-cvv">{CVV}</p>
        </div>
        <div className="right">
          {!confirmed && (
            <form>
              <div className="name">
                <label>CARDHOLDER NAME</label>
                <input
                  type="text"
                  name="name"
                  
                  placeholder="e.g. Jane Appleseed"
                  value={name}
                  maxLength={25}
                  onChange={(e) => setName(e.target.value)}
                  id="name-box"
                />
                <p id="err">{nameERR}</p>
              </div>
              <div className="number">
                <label>CARD NUMBER</label>
                <input
                  type="text"
                  name="number"
                  maxLength={19}
                  value={number
                    .replace(/\s/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim()}
                  placeholder="e.g. 1234 5678 9123 0000"
                  onChange={(e) => setNumber(e.target.value)}
                  id="number-box"
                />
                <p id="err">{numberERR}</p>
              </div>
              <div className="date">
                <div className="date-left">
                  <label>EXP. DATE (MM/YY)</label>
                  <div className="mmyy">
                    <input
                      type="tel"
                      placeholder="MM"
                      maxLength={2}
                      value={MM}
                      onChange={(e) => setMM(e.target.value)}
                      id="mm-box"
                    />

                    <input
                      type="tel"
                      placeholder="YY"
                      maxLength={2}
                      value={YY}
                      onChange={(e) => setYY(e.target.value)}
                      id="yy-box"
                    />
                  </div>
                  <p id="err">{dateERR}</p>
                </div>
                <div className="date-right">
                  <label>CVC</label>
                  <input
                    type="tel"
                    placeholder="e.g. 123"
                    maxLength={3}
                    value={CVV}
                    onChange={(e) => setCVV(e.target.value)}
                    id="cvv-box"
                  />
                  <p id="err">{cvvERR}</p>
                </div>
              </div>
              <div className="btn">
                <button onClick={handleSubmit}>Confirm</button>
              </div>
            </form>
          )}

          {/* Sucessful Message */}
          {confirmed && <ThankYou setConfirmed={setConfirmed} />}
        </div>
      </div>
    </>
  );
};

// function ThankYou() {
//     return (
//         <>
//             <div className="complete">
//                 <img src={complete} />
//                 <h1>Thank you!</h1>
//                 <p>  We've added your card details</p>
//                 <div className='btn'>
//                     <button>Continue</button>
//                 </div>
//             </div>
//         </>
//     )
// }

export default Interative;
