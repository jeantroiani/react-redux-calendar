import {
  ADD_REMINDER,
} from './actionTypes';

const initialState = {
  list: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_REMINDER: {
      return {
        ...state,
        list: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}


