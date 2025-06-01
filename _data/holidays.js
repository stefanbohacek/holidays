const fs = require("fs");
const path = require("path");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const sortArrayOfObjectsByKey = (arr, key, asc) => {
  arr.sort(function (a, b) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });

  return arr;
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const getCurrentMonth = () => {
  return new Date().getMonth();
};

const getCurrentDay = () => {
  return new Date().getDay();
};

const daysInMonth = (month) => {
  return new Date(new Date().getFullYear(), month, 0).getDate();
};

let holidays = sortArrayOfObjectsByKey(
  JSON.parse(fs.readFileSync(path.resolve(__dirname, "holidays.json"))),
  "month"
).filter(holiday => holiday.skip !== true);

holidays.forEach((event) => {
  if (event.start_date) {
    event.start_date = `${getCurrentYear()}-${event.start_date}`;
  } else {
    event.start_date = `${getCurrentYear()}-${String(event.month).padStart(
      2,
      "0"
    )}-01`;
  }
  if (event.end_date) {
    event.end_date = `${getCurrentYear()}-${event.end_date}`;
  } else {
    event.end_date = `${getCurrentYear()}-${String(event.month).padStart(
      2,
      "0"
    )}-${daysInMonth(event.month)}`;
  }
});

let holidaysList = {};

months.forEach((month, monthIndex) => {
  holidaysList[month] = sortArrayOfObjectsByKey(
    holidays.filter((event) => event.month - 1 === monthIndex),
    "name",
    true
  );
});

module.exports = () => {
  return holidaysList;
};
