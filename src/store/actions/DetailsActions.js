import { PD_SCHEDULE_ON, SHOW_SCHEDULE } from '../Types';

export function onSchedule(show) {
  return {
    type: SHOW_SCHEDULE,
    show: show,
  };
}

export function scheduleDate(date, time) {
  return {
    type: PD_SCHEDULE_ON,
    date: date,
    time: time,
  };
}
