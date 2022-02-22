import { createReducer, on } from '@ngrx/store';
import { addChar } from './calculator.actions';

const initialState = '';


export const calculatorReducer = createReducer(
  initialState,
  on(addChar, (state, {char}) => {
    return state + char;
  })

);
