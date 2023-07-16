import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleProyect, minimizeproyect } from '../../redux/actions';
import facilM from "../logos/facilmarket.png";
import equipo from "../logos/equipo.png";
import flecha1 from "../logos/flechas1.jpg";
import flecha2 from "../logos/flechas2.jpg";
import './proyectos.css';

function Proyectos() {
  const dispatch = useDispatch();

  const proyect = useSelector(state => state.openProyects);

  const handleCerrarProyectos = () => {
    dispatch(toggleProyect(false))
  };

  const minimize = () => {
    dispatch(minimizeproyect(!proyect))
  }

  return (
    <div className="proyectos-contain">
      <div className='barrasuperior'>
        <div className='ordenador'><img className='equipo' src={equipo} alt="equipo" />ordenador</div>
        <div className='barra'>
          <div><img className='flecha1' src={flecha1} alt="flecha1" /><img className='flecha2' src={flecha2} alt="flecha2" /></div>
          <div className='barrita'><img className='equipo' src={equipo} alt="equipo" />▶ Ordenador ▶ System (C:) ▶ Hector ▶ Escritorio ▶ Proyectos</div>
        </div>
        <div className='botones'>
          <button onClick={minimize}>_</button>
          <button>□</button>
          <button className='cerrar' onClick={handleCerrarProyectos}>X</button>
        </div>
      </div>

      <div className='proyectos'>
        <a href="https://github.com/Hector141/facil-market-proyect" target="_blank" rel="noopener noreferrer">
          <div className='proyecto1'>
            <img className='facilM' src={facilM} alt="carpeta" />
            <label htmlFor='facilM'>Facil Market</label>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Proyectos;
