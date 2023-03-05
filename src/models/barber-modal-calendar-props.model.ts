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
