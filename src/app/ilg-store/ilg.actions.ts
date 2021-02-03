import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { InterlinearGloss } from './ilg.reducer';

export const createInterlinearText = createAction(
    '[Interlinear Text List] Add Interlinear Text',
    props<{ ilg: InterlinearGloss }> ()
);

// Uncessary if I do my job right with Entities
export const readInterlinearText = createAction(
    '[Interlinear Text List] Retrieve Interlinear Text',
    props<{ ilgId: number }> ()
);

export const updateInterlinearText = createAction(
    '[Interlinear Text List] Update Interlinear Text',
    props<{ update: Update<InterlinearGloss> }> ()
);

export const deleteInterlinearText = createAction(
    '[Interlinear Text List] Delete Interlinear Text',
    props<{ ilgId: number }> ()
);
