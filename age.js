function dateYears () {
    let pastDate = prompt('Please enter a date in format YYYY/MM/DD')   //prompt for a date 
    let pastDateMs = Date.parse(pastDate) //parse and obtain milliseconds for unix epoch to prompted date
    let currentDate = Date.now()  //obtain milliseconds for unix epoch to current date
    let difference=Math.floor((currentDate-pastDateMs)/(1000*60*60*24*365)) //obtain milliseconds between past date and current date and convert to years
    if (isNaN(pastDateMs)){   //check for correct formatting
      return `This was an invalid date format, please try again` 
    } else {     // return absolute value of difference if correct formating
      return `The difference in years between ${pastDate} and now is ${Math.abs(difference)} years`
    }
}
console.log(dateYears())
