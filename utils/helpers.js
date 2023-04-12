const format_time = (date) => {
    return date.toLocaleTimeString();
}

const format_date = (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
        date
      ).getDate()}/${new Date(date).getFullYear()}`;
}

module.exports = {format_time,format_date};