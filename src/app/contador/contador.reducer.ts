import { createReducer,on } from '@ngrx/store';
import { incrementar, decrementar } from './contador.action';

 

 /*
export function countadorReducer(state:number =10, action:Action) {
  switch (action.type) {

      case incrementar.type:
      return state +1;

      case decrementar.type:
          return state -1;
         
        default:
          return state;
  }
}
*/
export const initialState = 20;
 
const _countadorReducer = createReducer(
  initialState,
  on(incrementar, state => state + 1),
  on(decrementar, state => state - 1),
 
);
 
export function countadorReducer(state, action) {
  return _countadorReducer (state, action);
}