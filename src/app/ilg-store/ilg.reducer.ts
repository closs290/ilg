import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { 
    createInterlinearText, 
    readInterlinearText, 
    updateInterlinearText, 
    deleteInterlinearText } 
from './ilg.actions';

// ToDo: Look into using let morphemeGlossMap = new Map();
// morphemeGlossMap.set('myMorpheme', 'myGloss');

export interface morphemeGlossMap {
    morpheme: string,
    gloss: string
}

export interface word {
    morphemes: morphemeGlossMap[]
}

export interface phrase {
    words: word[]
}

export interface InterlinearGloss {
    language: string,
    datasetAuthor: string,
    year: number,
    phrases: phrase[]
    freeTranslation: string
}

export interface InterlinearTextState extends EntityState<InterlinearGloss> {
    // selectedTextId: number;
}

export const adapter: EntityAdapter<InterlinearGloss> = createEntityAdapter<InterlinearGloss>();
// This inherits addOne, addMany, updateOne, removeOne, etc.

// export const initialState: Array<InterlinearGloss> = [];
export const initialState: InterlinearTextState = adapter.getInitialState();

export const ilgReducer = createReducer(
    initialState,
    // on(createInterlinearText, (state, {InterlinearGloss}) => state),
    on(createInterlinearText, (state, props) => adapter.addOne(props.ilg, initialState)),
    // on(readInterlinearText, (state) => state),
    on(updateInterlinearText, (state, props) => adapter.updateOne(props.update, state)),
    on(deleteInterlinearText, (state, props) => adapter.removeOne(props.ilgId, initialState))
);