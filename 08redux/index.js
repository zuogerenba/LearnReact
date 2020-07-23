import store from './store/index.js';

// import { 
//   ADD_NUMBER,
//   SUB_NUMBER
//  } from "./store/constants.js";
import { 
  addAction,
  subAction
 } from "./store/actionCreators.js";

store.subcribe(()=>{
  console.log(store.getState())
})



store.dispatch(addAction(10))
store.dispatch(addAction(15))
store.dispatch(subAction(10))