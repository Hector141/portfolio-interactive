import React, { useState } from 'react';
import './barra.css';
import logo1 from "../logos/logo1.png";
import logo2 from "../logos/logo2.png";
import logo3 from "../logos/logo3.png";
import logo4 from "../logos/logo4.png";
import Perfil from '../perfil/perfil';
import { toggleInternet, minimizeInternet, minimizeproyect } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function BarraDeTareas() {
  const dispatch = useDispatch();
  const internetVisible = useSelector(state => state.internetVisible);
  const internete = useSelector(state => state.openInternet);
  const proyectVisible = useSelector(state => state.proyectVisible)
  const proyect = useSelector(state => state.openProyects)
  const [logo1Visible, setLogo1Visible] = useState(false);

  const handleClickLogo2 = () => {
    dispatch(toggleInternet(true));
    dispatch(minimizeInternet(!internete));
  };


  const handleClickLogo3 = () => {
    dispatch(minimizeproyect(!proyect));
  };

  const handleClickLogo1 = () => {
    setLogo1Visible(prevState => !prevState);
  };

  return (
    <div className="barra-contain">
      <div className={`logo1-contain ${logo1Visible ? 'active' : ''}`} onClick={handleClickLogo1}>
        <img className='logo1' src={logo1} alt="Logo 1" />
      </div>
      <div className={`logo2-contain`}>
        <img className={`logo2 ${internetVisible ? 'internet-active' : ''}`} onClick={handleClickLogo2} src={logo2} alt="Logo 2" />
      </div>
      <div className='logo3-contain'>
        <img className={`logo3 ${proyectVisible ? 'proyect-active' : ''}`} onClick={handleClickLogo3} src={logo3} alt="Logo 3" />
      </div>
      <div className='logo4-contain'>
        <img className='logo4' src={logo4} alt="Logo 4" />
      </div>
      {logo1Visible ? <Perfil /> : null}
    </div>
  );
}

export default BarraDeTareas;
