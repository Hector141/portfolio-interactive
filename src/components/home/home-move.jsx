import React, { useState, useEffect } from 'react';
import equipo from "../logos/equipo.png";
import papelera from "../logos/papelera.png";
import carpeta from "../logos/carpeta.png";
import Proyectos from '../proyectos/proyectos';
import nota from "../logos/notepad.png";
import './home.css';
import Calculator from "../calculadora/calculadora";
import About from '../sobreMi/about';
import { useSelector, useDispatch } from 'react-redux';
import Juegos from '../juegos/juegos';
import Clippy from './clippy';
import Internet from '../internet/internet';
import { toggleProyect, minimizeproyect } from '../../redux/actions';

function Home() {
  const dispatch = useDispatch();
  const [clickAbout, setclickAbout] = useState(false);
  const [dobleClic, setDobleClic] = useState(false);
  const [clyppy, setclyppy] = useState(true);

  const calculadoraVisible = useSelector(state => state.calculadoraVisible);
  const juegosVisible = useSelector(state => state.gamesVisible);
  const internetVisible = useSelector(state => state.internetVisible);
  const openInternet = useSelector(state => state.openInternet);

  const proyectVisible = useSelector(state => state.proyectVisible);
  const openProyecto = useSelector(state => state.openProyects);

  const [carpetaPos, setCarpetaPos] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [papeleraPos, setPapeleraPos] = useState({ x: 20, y: 150 });
  const [equipoPos, setEquipoPos] = useState({ x: 20, y: 270 });
  const [isDraggingPapelera, setIsDraggingPapelera] = useState(false);
  const [isDraggingEquipo, setIsDraggingEquipo] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsDraggingPapelera(false);
    setIsDraggingEquipo(false);
  };

  useEffect(() => {
      const handleMouseMove = (e) => {
        if (isDragging) {
          const newX = e.clientX;
          const newY = e.clientY;
          setCarpetaPos({ x: newX, y: newY });
        }
      };

      const handleMouseMovePapelera = (e) => {
        if (isDraggingPapelera) {
          const newX = e.clientX;
          const newY = e.clientY;
          setPapeleraPos({ x: newX, y: newY });
        }
      };

      const handleMouseMoveEquipo = (e) => {
        if (isDraggingEquipo) {
          const newX = e.clientX;
          const newY = e.clientY;
          setEquipoPos({ x: newX, y: newY });
        }
      };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleMouseMovePapelera);
    window.addEventListener('mousemove', handleMouseMoveEquipo);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleMouseMovePapelera);
      window.removeEventListener('mousemove', handleMouseMoveEquipo);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isDraggingPapelera, isDraggingEquipo]);

  const handleClickAbout = () => {
    if (!dobleClic) {
      setDobleClic(true);
      setTimeout(() => {
        setDobleClic(false);
      }, 300);
    } else {
      setclickAbout(prevState => !prevState);
      setDobleClic(false);
    }
  };

  const handleClickProyectos = () => {
    if (!dobleClic) {
      setDobleClic(true);
      setTimeout(() => {
        setDobleClic(false);
      }, 300);
    } else {
      dispatch(toggleProyect(true));
      dispatch(minimizeproyect(!openProyecto));
      setDobleClic(false);
    }
  };

  const handleCerrarClyppy = () => {
    setclyppy(false);
  };

  const handleCerrarAbout = () => {
    setclickAbout(false);
  };

  return (
    <div>
      {clickAbout ? <About onCerrarProyectos={handleCerrarAbout} /> : null}
      {calculadoraVisible && <Calculator />}
      {juegosVisible && <Juegos />}
      {internetVisible && openInternet && <Internet />}
      {proyectVisible && openProyecto && <Proyectos />}
      {clyppy ? <Clippy onCerrarClippy={handleCerrarClyppy} /> : null}

      <div className='sobreMi' onClick={handleClickAbout}>
        <img className='nota' src={nota} alt="nota" />
        <label htmlFor="nota">Sobre Mi</label>
      </div>

      <div className="home-contain">
        <div
          className='items-contain'
          style={{ position: 'absolute', top: papeleraPos.y, left: papeleraPos.x }}
          onMouseDown={() => setIsDraggingPapelera(true)}
        >
          <img className='papelera' src={papelera} alt="papelera" />
          <label htmlFor="papelera">papelera</label>
        </div>

        <div
          className='items-contain'
          style={{ position: 'absolute', top: carpetaPos.y, left: carpetaPos.x }}
          onMouseDown={handleMouseDown}
        >
          <img className='carpeta' src={carpeta} alt="carpeta" onClick={handleClickProyectos} />
          <label htmlFor="carpeta">proyectos</label>
        </div>

        <div
          className='items-contain'
          style={{ position: 'absolute', top: equipoPos.y, left: equipoPos.x }}
          onMouseDown={() => setIsDraggingEquipo(true)}
        >
          <img className='equipo' src={equipo} alt="equipo" />
          <label htmlFor="equipo">equipo</label>
        </div>
      </div>
    </div>
  );
}

export default Home;
