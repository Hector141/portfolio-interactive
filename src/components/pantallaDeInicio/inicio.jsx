// Inicio.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './inicio.css';
import Spinner from '../spiner/spinner';

function Inicio() {
  const [active, setActive] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (active) {
      setLoggingIn(true); // Cambia el estado a "iniciando sesión"
      const timeoutId = setTimeout(() => {
        navigate('/home');
      }, 1500);

      return () => clearTimeout(timeoutId);
    }
  }, [active, navigate]);

  const handleNavLinkClick = () => {
    setActive(true);
  };

  return (
    <div className={`user-inicio-container ${active ? 'active' : ''}`}>
      {loggingIn ? (
        <div className="logging-in-container">
          <h2>Iniciando sesión...</h2>
          <Spinner className="spiner" />
        </div>
      ) : (
        <>
          <div className="home-button" onClick={handleNavLinkClick}>
            <div className='image-container'> 
              <img src="https://i.pinimg.com/originals/3e/50/c8/3e50c82d8802a640d1e68cf7a7427d74.gif" alt="nyan gif"/>
            </div>
          </div>
          <div className='inicio-buttom'>
            <h1>Invitado</h1>
          </div>
          <p className='fondo'>Windows 7 Porfolio - Hector Cardoso</p>
        </>
      )}
    </div>
  );
}

export default Inicio;
