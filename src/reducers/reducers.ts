import { RootState, SET_IMAGE, ActionTypes } from '../types/types';

const initialState: RootState = {
  image: null,
};

const rootReducer = (state = initialState, action: ActionTypes): RootState => {
  switch (action.type) {
    case SET_IMAGE:
      return {
        ...state,
        image: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;