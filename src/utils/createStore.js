import { createStore as reduxCreateStore } from "redux"

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        modalContent: action.obj
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        modalContent: null
      };
    default:
      return state;
  }
}



const initialState = { modalContent: null };

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore