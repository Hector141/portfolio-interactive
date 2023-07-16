

const initialState = {
  calculadoraVisible: false,
  gamesVisible: false,
  internetVisible: false,
  openInternet: true,
  openProyects: true,
  proyectVisible: false,
 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_CALCULADORA':
      return {
        ...state,
        calculadoraVisible: action.payload,
      };

      case 'TOGGLE_GAMES':
      return {
        ...state,
        gamesVisible: action.payload,
      };
      case 'TOGGLE_INTERNET':
        return {
          ...state,
          internetVisible: action.payload,
        };
        case 'MINIMIZE_INTERNET':
        return {
          ...state,
          openInternet: action.payload,
        };
        case 'TOGGLE_PROYECT':
        return {
          ...state,
          proyectVisible: action.payload,
        };
        case 'MINIMIZE_PROYECT':
        return {
          ...state,
          openProyects: action.payload,
        };
    default:
      return state;
  }
};



export default reducer;
