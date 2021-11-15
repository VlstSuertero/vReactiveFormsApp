import { createReducer, on } from '@ngrx/store';
import { CarEntity, OwnerEntity } from '../models';
import * as actions from './actions'


export const FeatureKey = '';

export interface State {

  owners: OwnerEntity[],
  cars: CarEntity[],

}

export const initialState: State = {
  owners: [],
  cars: []
};


export const reducer = createReducer(
  initialState,
  on(actions.fetchOwners, state => ({
    ...state,
    owners: state.owners
  })),
  on(actions.fetchOwnersSuccess, (state, {data}) => ({
    ...state,
    owners: [...state.owners, data]
  })),
  on(actions.fetchOwnersChange, (state, {data}) => {

    const owners = JSON.parse(JSON.stringify(state.owners))

    const idx = data

    return {
    ...state,
      owners: data
    }
  }),
  on(actions.fetchOwnersRemove, (state, {data}) => ({
    ...state,
    owner: data
  }))
);

