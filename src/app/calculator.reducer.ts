import { createReducer, on } from '@ngrx/store';
import { addChar, getAnswer, removeAllCharacters, removeLastCharacter } from './calculator.actions';

const initialState = '';

export const calculatorReducer = createReducer(
  initialState,
  on(addChar, (state, {char}) => {
    if (state === 'Error') {
      return state;
    }
    return state + char;
  }),
  on(removeAllCharacters, state => ''),
  on(removeLastCharacter, state => {
    if (state === 'Error' || state.length === 1) {
      return '';
    }
    return state.substring(0, state.length - 1);
  }),
  on(getAnswer, state => {
    let answer = '';
    try {
      answer = eval(state);
      if (typeof answer !== 'function') {
        return answer.toString();
      }
      return 'Error';
    } catch (e) {
      return 'Error';
    }
  })
);
