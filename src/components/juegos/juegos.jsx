import React, { useState } from 'react';
import { toggleGames } from  '../../redux/actions';
import {  useDispatch } from 'react-redux';
import "./juegos.css"
import juegos from "../logos/juegos.png";
import cod from "../logos/cod.png";
import valo from "../logos/valo.png";
import diablo from "../logos/diablo4.png";
import lol from "../logos/lol.png";
import flecha1 from "../logos/flechas1.jpg"
import flecha2 from "../logos/flechas2.jpg"

function Juegos() {

  const dispatch = useDispatch();

 

  const handleClosegames = () => {
    dispatch(toggleGames(false));
  };


  return (
<div className="proyectos-contain">
<div className='barrasuperior'>
<div className='juegos'><img  src={juegos} alt="juegos" /> Mis juegos</div>
    <div className='barra'>
    <div><img className='flecha1' src={flecha1} alt="flecha1" /><img className='flecha2' src={flecha2} alt="flecha2" /></div>

        <div className='barrita'>▶ Ordenador ▶ System (C:) ▶ Hector ▶ Juegos</div>
        
        
    </div>
    
    <div className='botones'><button>_</button><button>□</button><button className='cerrar'  onClick={handleClosegames}>X</button></div></div>

<div className='juegos-cont'>
    <div className='juego'><img  src={lol} alt="lol" />League of Legends</div>
    <div className='juego'><img  src={cod} alt="cod" />Cod MW 2</div>
    <div className='juego'><img  src={diablo} alt="diablo" />Diablo 4</div>
    <div className='juego'><img  src={valo} alt="valo" />VALORANT</div>

</div>
</div>
  );
}

export default Juegos;
