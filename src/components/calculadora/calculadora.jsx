import React, { useState } from 'react';
import calculadora from "../logos/calculadora.png";
import { toggleCalculadora } from  '../../redux/actions';
import {  useDispatch } from 'react-redux';
import "./calculadora.css"

function Calculator() {

  const dispatch = useDispatch();

  const [result, setResult] = useState('');


  const handleCloseCalculator = () => {
    dispatch(toggleCalculadora(false));
  };

  const handleButtonClick = (value) => {
    setResult(result + value);
  };

  const clearResult = () => {
    setResult('');
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const calculatedResult = eval(result);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };
  

  return (
    <div className='calculator-cont'>
       <img className='calculadora' src={calculadora} alt="calculadora" /> <p className='calcu-p'> Calcualdora</p><button className='btn-cerrar' onClick={handleCloseCalculator}>X</button>
    <div className="calculator">
      <input className="calcu-input" type="text" value={result} readOnly />
      <div className="buttons">
        <button className="buttons1" onClick={() => handleButtonClick('7')}>7</button>
        <button className="buttons1" onClick={() => handleButtonClick('8')}>8</button>
        <button className="buttons1" onClick={() => handleButtonClick('9')}>9</button>
        <button className="buttons1" onClick={() => handleButtonClick('+')}>+</button>
        <button className="buttons1" onClick={() => handleButtonClick('4')}>4</button>
        <button className="buttons1" onClick={() => handleButtonClick('5')}>5</button>
        <button className="buttons1" onClick={() => handleButtonClick('6')}>6</button>
        <button className="buttons1" onClick={() => handleButtonClick('-')}>-</button>
        <button className="buttons1" onClick={() => handleButtonClick('1')}>1</button>
        <button className="buttons1" onClick={() => handleButtonClick('2')}>2</button>
        <button className="buttons1" onClick={() => handleButtonClick('3')}>3</button>
        <button className="buttons1" onClick={() => handleButtonClick('*')}>*</button>
        <button className="buttons1" onClick={() => handleButtonClick('0')}>0</button>
        <button className="buttons1" onClick={clearResult}>C</button>
        <button className="buttons1" onClick={calculate}>=</button>
        <button className="buttons1" onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div></div>
  );
}

export default Calculator;
