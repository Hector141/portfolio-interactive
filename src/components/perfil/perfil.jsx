import './perfil.css';
import perfilImg from "../logos/foto.png";
import acerca from "../logos/win7.png";
import calculadora from "../logos/calculadora.png";
import internet from "../logos/logo2.png";
import Command from "../logos/command.jpg";
import juegos from "../logos/juegos.png";
import notepad from "../logos/notepad.png";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { toggleCalculadora, toggleGames, toggleInternet, toggleProyect, minimizeInternet, minimizeproyect, setPerfilVisible, toggleCommand } from '../../redux/actions';

function Perfil() {
  const dispatch = useDispatch();
  const internete = useSelector(state => state.openInternet);
  const proyect = useSelector(state => state.openProyects);

  const [showContactOptions, setShowContactOptions] = useState(false);
  const [copied, setCopied] = useState(false);
  let timeoutId;

  const handleCopyClick = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => setCopied(true))
      .catch((err) => console.error('Error copying to clipboard:', err));

    // Resetea el estado de "copied" después de unos segundos
    timeoutId = setTimeout(() => setCopied(false), 1000);
  };

  const handleOptionsMouseEnter = () => {
    setShowContactOptions(true);
    // Cancela el temporizador para ocultar las opciones si el mouse vuelve antes
    clearTimeout(timeoutId);
  };

  const handleOptionsMouseLeave = () => {
    timeoutId = setTimeout(() => setShowContactOptions(false), 100);
  };

  const handleClickLogo2 = () => {
    dispatch(toggleInternet(true));
    dispatch(minimizeInternet(!internete));
    dispatch(setPerfilVisible(false));
  };

  const handleClickProyectos = () => {
    dispatch(toggleProyect(true));
    dispatch(minimizeproyect(!proyect));
    dispatch(setPerfilVisible(false));
  };

  const handleClickCalculadora = () => {
    dispatch(toggleCalculadora(true));
    dispatch(setPerfilVisible(false));
  };

  const handleClickGames = () => {
    dispatch(toggleGames(true));
    dispatch(setPerfilVisible(false));
  };

  const handleClickCommand = () =>{
    dispatch(toggleCommand(true));
    dispatch(setPerfilVisible(false))
  }

  return (
    <div className="perfil-contain">
      <div className='datos-cont'>
        <div className='algo'><img className='acerca' src={acerca} alt="acerca" />
          <p>Acerca de</p></div>
        <div className='algo' onClick={handleClickCalculadora} ><img className='calculadora' src={calculadora} alt="calculadora" />
          <p>Calculadora</p></div>
        <div className='algo' onClick={handleClickLogo2}><img className='internet' src={internet} alt="internet" />
          <p>Interent</p></div>
        <div className='algo' onClick={handleClickCommand}><img className='Command' src={Command} alt="Command" />
          <p>Command Prompt</p></div>
        <div className='algo' onClick={handleClickGames}>
          <img className='juegos' src={juegos} alt="juegos" />
          <p>Juegos</p></div>
        <div className='algo'><img className='notepad' src={notepad} alt="notepad" />
          <p>Bloc de notas</p></div>
        <div className='tprogramas'>
          <p className='allP'>  ▶Todos los programas</p></div>
      </div>

      <div className='search'><input type='text' placeholder='Buscar Programas                        🔎'></input></div>

      <div className='perfil-cont'>
        <img className="perfil-img" src={perfilImg} alt="Foto de perfil" />
        <div className='data-perfil'>
          <div className='dat-div'><p>Mi musica</p></div>
          <div className='dat-div' onClick={handleClickProyectos}><p>Mis proyectos</p></div>
          <div className='dat-div' onMouseEnter={handleOptionsMouseEnter} onMouseLeave={handleOptionsMouseLeave}>
        <p>Mis datos de contacto</p>
        {showContactOptions && (
          <div className="contact-options">
            <button onClick={() => handleCopyClick('+54 3437516370')}>Teléfono</button>
            <button onClick={() => handleCopyClick('Hectorcardoso18@outlook.com')}>Email</button>
          </div>
        )}
        {copied && <p className='copied' style={{ color: 'green' }}>Copiado al portapapeles :D</p>}
      </div>
          <a href='https://memes-templates-project-using-vue-3.vercel.app/' target='blank'><div className='dat-div'><p>Memes</p></div></a>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
