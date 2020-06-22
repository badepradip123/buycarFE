import { PD_SCHEDULE_ON, SHOW_SCHEDULE } from '../Types';

const INITIAL_STATE = {
  date: '',
  time: '',
  showSchedule: false,
};

const addSchedule = (state, action) => {
  return { ...state, date: action.date, time: action.time };
};

const showSchedule = (state, action) => {
  return { ...state, showSchedule: action.show };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PD_SCHEDULE_ON:
      return addSchedule(state, action);

    case SHOW_SCHEDULE:
      return showSchedule(state, action);

    default:
      return state;
  }
};
