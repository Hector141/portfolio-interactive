import React, { useRef, useEffect } from 'react';
import './App.css';
import BarraDeTareas from './components/barraDeTareas/barraDeTareas';
import Home from './components/home/home';
import Perfil from './components/perfil/perfil';
import { useSelector, useDispatch } from 'react-redux';
import { setPerfilVisible } from './redux/actions';  // Ajusta la importación según la ubicación correcta

function App() {
  const logo1Visible = useSelector(state => state.logo1Visible);
  const dispatch = useDispatch();

  const perfilRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (perfilRef.current && !perfilRef.current.contains(event.target)) {
        dispatch(setPerfilVisible(false));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch]);

  return (
    <div className="App" ref={perfilRef}>
      <Home />
      {logo1Visible ? <Perfil /> : null}
      <BarraDeTareas />
    </div>
  );
}

export default App;
