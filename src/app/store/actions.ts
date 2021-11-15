import { createAction, props } from '@ngrx/store';

export const fetchOwners = createAction('[Car Owner List] Fetch Owner List');
export const fetchOwnersSuccess = createAction('[Car Owner List] Fetch Owner List Success', props<{ data: any }>());
export const fetchOwnersChange = createAction('[Car Owner List] Fetch Owner List Change', props<{ data: any }>());
export const fetchOwnersRemove = createAction('[Car Owner List] Fetch Owner List Remove', props<{ data: any }>());
export const fetchOwnersFailure = createAction('[Car Owner List] Fetch Owner List Failure', props<{ error: any }>());

export const fetchCars = createAction('[Car Owner List] Fetch Cars List');
export const fetchCarsSuccess = createAction('[Car Owner List] Fetch Cars List Success', props<{ data: any }>());
export const fetchCarsChange = createAction('[Car Owner List] Fetch Cars List Change', props<{ data: any }>());
export const fetchCarsRemove = createAction('[Car Owner List] Fetch Cars List Remove', props<{ data: any }>());
export const fetchCarsFailure = createAction('[Car Owner List] Fetch Cars List Failure', props<{ error: any }>());
