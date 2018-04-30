import {
  ADD_REMINDER,
} from './actionTypes';

export const addReminder = (date) => ({
  type: ADD_REMINDER,
  payload: date,
});

