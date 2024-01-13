import React, { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
import { toggleProyect, minimizeproyect, setActiveWindow } from '../../redux/actions';
import facilM from "../logos/facilmarket.png";
import equipo from "../logos/equipo.png";
import flecha1 from "../logos/flechas1.jpg";
import flecha2 from "../logos/flechas2.jpg";
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
      <div className='barrasuperior' onMouseDown={handleMouseDown}>
        <div className='ordenador'><img className='equipo' src={equipo} alt="equipo" />ordenador</div>
        <div className='barra'>
          <div><img className='flecha1' src={flecha1} alt="flecha1" /><img className='flecha2' src={flecha2} alt="flecha2" /></div>
          <div className='barrita'><img className='equipo' src={equipo} alt="equipo" />▶ System(C:)▶Hector ▶Escritorio ▶Proyectos</div>
        </div>
        <div className='botones'>
          <button onClick={minimize}>_</button>
          <button onClick={toggleMaximize}>□</button>
          <button className='cerrar' onClick={handleCerrarProyectos}>X</button>
        </div>
      </div>

      <div className='proyectos'>
        <a className='proyects-link' href="https://github.com/Hector141/facil-market-proyect" target="_blank" rel="noopener noreferrer">
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
