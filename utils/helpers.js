//create format_time function
const format_time = (date) => {
  return date.toLocaleTimeString();
};

//create format_date function
const format_date = (date) => {
  return `${new Date(date).getMonth() + 1}/${new Date(
    date
  ).getDate()}/${new Date(date).getFullYear()}`;
};

const isEqual = (var1, var2) => {
  console.log(var1);
  console.log(var2);
  if (var1 == var2) {
    return true;
  } else {
    return false;
  }
};

module.exports = { format_time, format_date, isEqual };
