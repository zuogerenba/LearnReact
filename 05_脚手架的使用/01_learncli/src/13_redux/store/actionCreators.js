import { 
  ADD_NUMBER,
  SUB_NUMBER  
 } from "./constants";

 export const addAction = (num) => {
   return {
     type: ADD_NUMBER,
     num
   }
 }

 export const subAction = (num) => {
  return {
    type: SUB_NUMBER,
    num
  }
}