import { createAction, props } from '@ngrx/store';


export const addChar = createAction('[Calculator] Add character', props<{char: string | null}>());
export const removeAllCharacters = createAction('[Calculator] Remove all characters');
