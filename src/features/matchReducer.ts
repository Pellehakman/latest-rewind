import { createAction, createReducer } from '@reduxjs/toolkit';
import { Match } from '../models/data';

const initialState : Match = {teamOne: '', teamTwo: '', matchId: 0};

const addMatch = createAction<Match>('Add Match');

const actions = { addMatch };

const reducer = createReducer(initialState, {
    [addMatch.toString()]: ( state, action) => {
        state = action.payload;
        return state;
    }
});


export { reducer, actions };