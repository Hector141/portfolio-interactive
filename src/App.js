import React, { useRef, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Perfil from './components/perfil/perfil';
import Inicio from "./components/pantallaDeInicio/inicio";
import { useSelector, useDispatch } from 'react-redux';
import { setPerfilVisible } from './redux/actions';

function App() {
  const logo1Visible = useSelector(state => state.logo1Visible);
  const dispatch = useDispatch();
  const perfilRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (perfilRef.current && !perfilRef.current.contains(event.target)) {
        dispatch(setPerfilVisible(false));
      }
    };

    if (logo1Visible && location.pathname === "/home") {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch, logo1Visible, location.pathname]);

  return (
    <div>
      {logo1Visible && location.pathname === "/home" && (
        <div ref={perfilRef}>
          <Perfil />
        </div>
      )}

      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
