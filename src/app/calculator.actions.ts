import { createAction, props } from '@ngrx/store';

export const addChar = createAction('[Calculator] Add character', props<{char: string | null}>());
export const removeAllCharacters = createAction('[Calculator] Remove all characters');
export const removeLastCharacter = createAction('[Calculator] Remove last character');
export const getAnswer = createAction('[Calculator] Get answer');
