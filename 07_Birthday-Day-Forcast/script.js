"use strict";

const calcBirthdayDay = (date, month, dayName) => {
  const curYear = new Date().getFullYear();
  const parseDay = dayName[0].toUpperCase() + dayName.slice(1, 3); // Converts to short-form day
  const locale = navigator.language;
  const fullDateOptions = {
    dateStyle: "full",
  };

  for (let i = curYear; i <= curYear + 50; i++) {
    const refDate = new Date(i, month - 1, date);
    const forcastDate = new Intl.DateTimeFormat(locale, fullDateOptions).format(
      refDate.setFullYear(i)
    );

    if (refDate.toDateString().startsWith(parseDay)) {
      console.log(forcastDate);
    }
  }
};

calcBirthdayDay(9, 8, "Saturday");
