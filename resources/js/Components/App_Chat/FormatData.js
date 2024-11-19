

const formatDate = (date) => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear(),
      hours = "" + d.getHours(),
      min = "" + d.getMinutes();
  
    let dateNew = new Date();
  
    let ampm = hours >= 12 ? "PM" : "AM"; // Determine if it's AM or PM
  
    // Convert hours from 24-hour to 12-hour format
    hours = (hours % 12) || 12;
  
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    if (hours.length < 2) hours = "0" + hours;
    if (min.length < 2) min = "0" + min;
  
    if (dateNew.getFullYear() == year && dateNew.getDate() == day && dateNew.getMonth() + 1 == month) {
      return hours + ":" + min + " " + ampm;
    } else if (dateNew.getFullYear() == year && dateNew.getMonth() + 1 == month) {
      return [day, month].join("/") + " " + hours + ":" + min + " " + ampm;
    } else {
      return [day, month, year].join("/") + " " + hours + ":" + min + " " + ampm;
    }
  };
  
  export default formatDate;