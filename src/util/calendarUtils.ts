import { CalendarDay } from '../types/Calendar';

export function generateCalendarRows(currentMonth: Date): CalendarDay[][] {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  // 지난 달 마지막 날짜
  const prevMonthLastDate = new Date(year, month, 0).getDate();
  // 이번 달 마지막 날짜
  const thisMonthLastDate = new Date(year, month + 1, 0).getDate();
  // 이번 달 시작 요일 (0: 일요일 ~ 6: 토요일)
  const startWeekDay = new Date(year, month, 1).getDay();
  // 달력에 표시할 날짜 배열
  const days: CalendarDay[] = [];

  // 이전 달 날짜 채우기
  for (let i = startWeekDay - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month - 1, prevMonthLastDate - i),
      currentMonth: false,
    });
  }

  // 이번 달 날짜 채우기
  for (let day = 1; day <= thisMonthLastDate; day++) {
    days.push({ date: new Date(year, month, day), currentMonth: true });
  }

  // 다음 달 날짜 채우기 (한 주가 무조건 7일이 되도록)
  const nextMonthFillDays = 7 - (days.length % 7 || 7);
  for (let day = 1; day <= nextMonthFillDays; day++) {
    days.push({ date: new Date(year, month + 1, day), currentMonth: false });
  }

  // 7일 단위로 배열 나누기 (주 단위)
  const calendarRows: CalendarDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    calendarRows.push(days.slice(i, i + 7));
  }

  return calendarRows;
}
