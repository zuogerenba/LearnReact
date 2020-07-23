import {
  ADD_NUMBER,
  SUB_NUMBER
} from "./constants.js";

const inititalState = {
  counter: 0
}

function reducer(state = inititalState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }

    default:
      break;
  }
}

export default reducer;