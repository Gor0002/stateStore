import {LOADER, SAVE_USER_LIST} from './action'

const initialState = [{loader: false}]


export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SAVE_USER_LIST:
      return {...state, data: payload};
    case LOADER:
        return {...state, loader: !state.loader}
    default:
      return state;
  }
};
