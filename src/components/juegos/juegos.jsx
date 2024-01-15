import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGames, setActiveWindow  } from  '../../redux/actions';
import "./juegos.css"
import juegos from "../logos/juegos.png";
import cod from "../logos/cod.png";
import valo from "../logos/valo.png";
import diablo from "../logos/diablo4.png";
import lol from "../logos/lol.png";
import tetris from "../logos/tetris.png";
import flecha1 from "../logos/flechas1.jpg"
import flecha2 from "../logos/flechas2.jpg"

function Juegos() {

  const dispatch = useDispatch();
  const activeWindow = useSelector(state => state.activeWindow);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 35, y: 35 });
  const [originalPosition, setOriginalPosition] = useState({ x: 35, y: 35 });

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
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    dispatch(setActiveWindow('games'));
  };


  const handleClosegames = () => {
    dispatch(toggleGames(false));
  };

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
    <div className={`games-contain  ${isMaximized ? 'maximized' : ''}`} style={{ left: `${position.x}%`, top: `${position.y}%`, zIndex: activeWindow === 'games' ? 3 : 1 }}>
<div className='proyect-barrasuperior'onMouseDown={handleMouseDown}>
<div className='juegos'><img  src={juegos} alt="juegos" /> Mis juegos</div>
    <div className='proyect-barra'>
    <div className='flechas'><img className='flecha1' src={flecha1} alt="flecha1" /><img className='flecha2' src={flecha2} alt="flecha2" /></div>

        <div className='proyect-barrita'>▶ Ordenador ▶ System (C:) ▶ Hector ▶ Juegos</div>
        
        <div className='secondbarrita'><p>Buscar Ordenador     🔍</p></div>
    </div>
    
    <div className='botones'><button>_</button>        
    <button onClick={toggleMaximize}>□</button>
    <button className='cerrar'  onClick={handleClosegames}>X</button></div></div>

<div className='juegos-cont'>
    <div className='juego'><img  src={lol} alt="lol" />League of Legends</div>
    <div className='juego'><img  src={cod} alt="cod" />Cod MW 2</div>
    <div className='juego'><img  src={diablo} alt="diablo" />Diablo 4</div>
    <div className='juego'><img  src={valo} alt="valo" />VALORANT</div>
    <div className='juego'><img  src={tetris} title='desde aca no se puede abrir :D, usa el escritorio.' alt="tetris" />TETRIS</div>
</div>
</div>
  );
}

export default Juegos;
