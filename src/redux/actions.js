export const toggleCalculadora = (value) => ({
    type: 'TOGGLE_CALCULADORA',
    payload: value,
  });
  

  export const minimizeCalculadora = (value) => ({
    type: 'MINIMIZE_CALCULADORA',
    payload: value,
  });
  
  export const toggleGames = (value) => ({
    type: 'TOGGLE_GAMES',
    payload: value,
  });


  
  export const toggleInternet = (value) => ({
    type: 'TOGGLE_INTERNET',
    payload: value,
  });
  
  export const minimizeInternet = (value) => ({
    type: 'MINIMIZE_INTERNET',
    payload: value,
  });

  export const toggleCommand = (value) => ({
    type: 'TOGGLE_COMMAND',
    payload: value,
  });

  export const minimizeCommand = (value) => ({
    type: 'MINIMIZE_COMMAND',
    payload: value,
  });

  export const toggleProyect = (value) => ({
    type: 'TOGGLE_PROYECT',
    payload: value,
  });

  export const minimizeproyect = (value) => ({
    type: 'MINIMIZE_PROYECT',
    payload: value,
  });



  export const setActiveWindow = (windowName) => {
    return {
      type: 'SET_ACTIVE_WINDOW',
      payload: windowName,
    };
  };

  export const setPerfilVisible = (isVisible) => ({
    type: 'SET_LOGO1_VISIBLE',
    payload: isVisible,
  });

