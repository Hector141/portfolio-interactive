import './perfil.css';
import perfilImg from "../logos/foto.png";
import acerca from "../logos/win7.png";
import calculadora from "../logos/calculadora.png";
import internet from "../logos/logo2.png";
import Command from "../logos/command.jpg";
import juegos from "../logos/juegos.png";
import notepad from "../logos/notepad.png";
import { useDispatch, useSelector} from 'react-redux';
import { toggleCalculadora, toggleGames,toggleInternet, toggleProyect, minimizeInternet, minimizeproyect } from '../../redux/actions';




function Perfil() {

  const dispatch = useDispatch();
  const internete = useSelector(state => state.openInternet);
  const proyect = useSelector(state => state.openProyects)

  const handleClickLogo2 = () => {
    dispatch(toggleInternet(true));
    dispatch(minimizeInternet(!internete));
  };


  const handleClickProyectos = () => {
    dispatch(toggleProyect(true))
    dispatch(minimizeproyect(!proyect));;
  };

  const handleClickCalculadora = () => {
    dispatch(toggleCalculadora(true));
  };

  const handleClickGames = () => {
    dispatch(toggleGames(true));
  };
  
  return (
<div className="perfil-contain">
    


    <div className='datos-cont'>
    <div className='algo'><img className='acerca' src={acerca} alt="acerca" />
    <p>Acerca de</p></div>
    <div className='algo' onClick={handleClickCalculadora} ><img className='calculadora' src={calculadora} alt="calculadora" />
    <p>Calculadora</p></div>
    <div className='algo'  onClick={handleClickLogo2}><img className='internet' src={internet} alt="internet" />
    <p>Interent</p></div>
    <div className='algo'><img className='Command' src={Command} alt="Command" />
    <p>Command Prompt</p></div>
    <div className='algo' onClick={handleClickGames}>
    <img className='juegos'  src={juegos} alt="juegos" />
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
            <div className='dat-div'><p>Mis datos de contacto</p></div>
            <div className='dat-div'><p>Memes</p></div>
        </div>
    </div>
</div>

  );
}

export default Perfil;