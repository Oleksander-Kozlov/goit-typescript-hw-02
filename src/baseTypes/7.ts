/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum weekDays{
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
} 
function isWeekend(day: weekDays): boolean{ 
  if (day === weekDays.Saturday||day === weekDays.Sunday) return true
  return false;
}



