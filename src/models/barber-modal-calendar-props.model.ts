/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ScheduleDay from "./schedule-day.model";


interface BarberModalCalendarProps {

  listDays: ScheduleDay[], 
  month: number, 
  year: number, 
  day: number, 
  onSelectDay: (day: number) => void,
  onPreviousMonth: () => void,
  onNextMonth: () => void
}

export default BarberModalCalendarProps;
