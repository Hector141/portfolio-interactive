import React, { useState } from 'react';
import clippy from '../logos/Clippy.png';

function Clippy({onCerrarClippy}) {

    const handleCerrarClippy = () => {
        onCerrarClippy();
      };

  const [currentDialog, setCurrentDialog] = useState(0);
  const dialogs = [
    '¡Hola! Soy el Clippy de esta página. Permíteme presentarte el portafolio de mi creador. Te voy a dar algunos consejos para esta pagina. Esta pagina esta hecha para interactuar como si fuera windows 7 y conocer a mi creador.',
    "Puedes ir abriendo los archivos o carpetas apra conocer el portfolio de mi creador. Si buscas algo mas comun solo entra a internet y ahi estara mas facil de encontrar toda la informacion de el",
    "Por ultimo para disfrutar mas la pagina usa F11 para tenerla en pantalla completa. Ahora unas palabras de mi creador: Desde ya muchas gracias por ver mi porfolio :D"
  ];

  const previousDialog = () => {
    setCurrentDialog((prevDialog) => (prevDialog === 0 ? dialogs.length - 1 : prevDialog - 1));
  };

  const nextDialog = () => {
    setCurrentDialog((prevDialog) => (prevDialog === dialogs.length - 1 ? 0 : prevDialog + 1));
  };

  return (
    <div className='clippy-cont'>
        <button className='btn-cerrarClp' onClick={handleCerrarClippy}>X</button>
      <p>{dialogs[currentDialog]}
       <div className='btn-cont'> <button className='dia-boton1' onClick={previousDialog}>&larr;</button>
        <button className='dia-boton2' onClick={nextDialog}>&rarr;</button></div></p>
      <img className='clippy' src={clippy} alt='clippy' />
      <div className='dialog-navigation'>

      </div>
    </div>
  );
}

export default Clippy;

  