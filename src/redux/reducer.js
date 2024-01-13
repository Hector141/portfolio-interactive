

const initialState = {
  calculadoraVisible: false,
  gamesVisible: false,
  internetVisible: false,
  openInternet: false,
  openProyects: false,
  proyectVisible: false,
  activeWindow: null, 
  logo1Visible: false,
  commandVisible: false,
  openCommand:false,
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
          openInternet: action.payload,
        };
        case 'MINIMIZE_INTERNET':
        return {
          ...state,
          internetVisible: action.payload,
        };
        case 'TOGGLE_PROYECT':
        return {
          ...state,
          proyectVisible: action.payload,
          openProyects: action.payload,
        };
        case 'MINIMIZE_PROYECT':
        return {
          ...state,
          openProyects: action.payload,
        };
        case 'SET_ACTIVE_WINDOW':
          return {
            ...state,
            activeWindow: action.payload,
          };
          case 'SET_LOGO1_VISIBLE':
            return {
              ...state,
              logo1Visible: action.payload,
            };
            case 'TOGGLE_COMMAND':
        return {
          ...state,
          commandVisible: action.payload,
          openCommand: action.payload,
        };
    default:
      return state;
  }
};



export default reducer;
