import React, { useState, useEffect } from 'react';
import calculadora from "../logos/calculadora.png";
import { minimizeCalculadora, toggleCalculadora } from  '../../redux/actions';
import {  useDispatch , useSelector} from 'react-redux';
import "./calculadora.css"

function Calculator() {

  const dispatch = useDispatch();

  const [result, setResult] = useState('');

  const calculadoraVisible = useSelector((state) => state.calculadoraVisible);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 20, y: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const offsetX = e.clientX - dragStart.x;
        const offsetY = e.clientY - dragStart.y;
  
        const windowWidth = document.documentElement.clientWidth;
        const windowHeight = document.documentElement.clientHeight;
        const maxX = windowWidth -315;  
        const maxY = windowHeight -410;  
  

        const newX = Math.max(0, Math.min(position.x + offsetX / windowWidth * 100, maxX / windowWidth * 100));
        const newY = Math.max(0, Math.min(position.y + offsetY / windowHeight * 100, maxY / windowHeight * 100));
  
        setPosition({ x: newX, y: newY });
        setDragStart({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart,position.x, position.y]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };


  const handleCloseCalculator = () => {
    dispatch(toggleCalculadora(false));
  };

  const handleMinimizeCalculator = () => {
    dispatch(minimizeCalculadora(!calculadoraVisible));
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
    <div className='calculator-cont' style={{ left: `${position.x}%`, top: `${position.y}%` }}>
      <div className='calculator-top' onMouseDown={handleMouseDown}> 
   
        <img className='calculadora' src={calculadora} alt="calculadora" /> <p className='calcu-p'> Calcualdora</p>
        <div className='calcu-btn' onClick={handleMinimizeCalculator}>
        <button className='minimize-calcu'>_</button>
        <button className='btn-cerrar' onClick={handleCloseCalculator}>X</button>
        </div>
        </div>
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
