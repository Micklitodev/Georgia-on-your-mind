//create format_time function
const format_time = (date) => {
    return date.toLocaleTimeString();
}

//create format_date function
const format_date = (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
        date
      ).getDate()}/${new Date(date).getFullYear()}`;
}

module.exports = {format_time,format_date};