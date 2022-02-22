import { createReducer, on } from '@ngrx/store';
import { addChar, removeAllCharacters } from './calculator.actions';

const initialState = '';


export const calculatorReducer = createReducer(
  initialState,
  on(addChar, (state, {char}) => state + char),
  on(removeAllCharacters, state => ''),
  // on(getAnswer, state => {
  //
  // })
  );
