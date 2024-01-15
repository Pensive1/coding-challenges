"use strict";

const calcBirthdayDay = (date, month, dayName) => {
  const curYear = new Date().getFullYear();
  const locale = navigator.language;
  const parseDay = dayName[0].toUpperCase() + dayName.slice(1, 3);
  const fullDateOptions = {
    dateStyle: "full",
  };

  for (let i = curYear; i <= curYear + 50; i++) {
    const refDate = new Date(i, month - 1, date);

    if (String(refDate).startsWith(parseDay)) {
      console.log(
        new Intl.DateTimeFormat(locale, fullDateOptions).format(
          refDate.setFullYear(i)
        )
      );
    }
  }
};

calcBirthdayDay(9, 8, "Sunday");
