import React, { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
import { toggleProyect, minimizeproyect, setActiveWindow } from '../../redux/actions';
import facilM from "../logos/facilmarket.png";
import equipo from "../logos/equipo.png";
import flecha1 from "../logos/flechas1.jpg";
import flecha2 from "../logos/flechas2.jpg";
import facelook from "../logos/facelook.png"
import countrys from "../logos/piContries.png"
import memepage from "../logos/meme-page.png"
import rick from "../logos/rick.png"
import tetris from "../logos/tetrispage.png"
import simplepage from "../logos/simple market page.png"

import './proyectos.css';

function Proyectos() {
  const dispatch = useDispatch();
  const activeWindow = useSelector(state => state.activeWindow);
  const proyect = useSelector(state => state.openProyects);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 25, y: 25 });
  const [isMaximized, setIsMaximized] = useState(false);
  const [originalPosition, setOriginalPosition] = useState({ x: 25, y: 25 });
  

useEffect(() => {
  const handleMouseMove = (e) => {
    if (isDragging && !isMaximized) {
      const offsetX = e.clientX - dragStart.x;
      const offsetY = e.clientY - dragStart.y;

      // Obtén el tamaño de la ventana y las coordenadas máximas
      const windowWidth = document.documentElement.clientWidth;
      const windowHeight = document.documentElement.clientHeight;
      const maxX = windowWidth;  // Ancho máximo de la ventana
      const maxY = windowHeight;  // Altura máxima de la ventana

      // Calcula las nuevas coordenadas asegurándote de que no se salgan de los límites
      const newX = Math.max(0, Math.min(position.x + offsetX / windowWidth * 100, maxX / windowWidth * 50));
      const newY = Math.max(0, Math.min(position.y + offsetY / windowHeight * 100, maxY / windowHeight * 43));

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
}, [isDragging, dragStart, isMaximized, position.x, position.y]);

  

  const handleMouseDown = (e) => {
    if (!isMaximized) {
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
      dispatch(setActiveWindow('proyectos'));
    }
  };

  const handleCerrarProyectos = () => {
    dispatch(toggleProyect(false));
  };

  const minimize = () => {
    dispatch(minimizeproyect(!proyect));
  }

  const toggleMaximize = () => {
    if (isMaximized) {
      // Si está maximizado, restaura la posición original
      setPosition(originalPosition);
    } else {
      // Si no está maximizado, guarda la posición actual antes de maximizar
      setOriginalPosition(position);
      // Establece la posición a (0, 0) al maximizar
      setPosition({ x: 0, y: 0 });
    }
    setIsMaximized(prevState => !prevState);
  };
  return (
    <div className={`proyectos-contain ${isMaximized ? 'maximized' : ''}`} style={{ left: `${position.x}%`, top: `${position.y}%`, zIndex: activeWindow === 'proyectos' ? 3 : 1 }}>
      <div className='proyect-barrasuperior' onMouseDown={handleMouseDown}>
        <div className='ordenador'><img className='equipo' src={equipo} alt="equipo" />ordenador</div>
        <div className='proyect-barra'>
          <div className='flechas'><img className='flecha1' src={flecha1} alt="flecha1" /><img className='flecha2' src={flecha2} alt="flecha2" /></div>
          <div className='proyect-barrita'><img className='equipo' src={equipo} alt="equipo" /><p>▶ System(C:)▶Hector ▶Escritorio ▶Proyectos</p></div>
          <div className='secondbarrita'><p>Buscar Ordenador     🔍</p></div>
        </div>
        <div className='botones'>
          <button onClick={minimize}>_</button>
          <button onClick={toggleMaximize}>□</button>
          <button className='cerrar' onClick={handleCerrarProyectos}>X</button>
        </div>
      </div>

      <div className='proyectos'>
        <div className='proyectos-container'>
        <a className='proyects-link' href="https://facil-market-proyect.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className='proyecto1'>
            <img className='facilM' src={facilM} alt="carpeta" />
            <label htmlFor='facilM'>Facil Market</label>
          </div>
        </a>
        <a className='proyects-link' href="https://pi-countries-ft-37a-cardoso-hector-sc1c.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className='proyecto1'>
            <img className='facilM' src={countrys} alt="carpeta" />
            <label htmlFor='facilM'>Country Pi - HENRY</label>
          </div>
        </a>
        <a className='proyects-link' href="https://memes-templates-project-using-vue-3.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className='proyecto1'>
            <img className='facilM' src={memepage} alt="carpeta" />
            <label htmlFor='facilM'>Meme page with Vue 3</label>
          </div>
        </a>
        <a className='proyects-link' href="https://proyecto-red-social-con-vue-js-y-bootstrap.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className='proyecto1'>
            <img className='facilM' src={facelook} alt="carpeta" />
            <label htmlFor='facilM'>Facelook</label>
          </div>
        </a>
        <a className='proyects-link' href="https://rick-and-morty-mauve-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className='proyecto1'>
            <img className='facilM' src={rick} alt="carpeta" />
            <label htmlFor='facilM'>Rick And Morty APP</label>
          </div>
        </a>
        <a className='proyects-link' href="https://tetris-js-one.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className='proyecto1'>
            <img className='facilM' src={tetris} alt="carpeta" />
            <label htmlFor='facilM'>Tetris game.js</label>
          </div>
        </a>
        <a className='proyects-link' href="https://market-simple-page-front-end.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className='proyecto1'>
            <img className='facilM' src={simplepage} alt="carpeta" />
            <label htmlFor='facilM'>Simple Market Page</label>
          </div>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
