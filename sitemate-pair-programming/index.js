// idea: create a dictionary
// with some cases over here, like:
// 00:00: midnight
// 12:00: midday
// 00 minutes: "o'clock"

const numbersToWords = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "quarter",
  17: "seventeen",
  30: "half"
}

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  if (time === '0:00') {
    return 'midnight';
  }
  if (time === '12:00') {
    return 'midday';
  }

  let [hour, minute] = time.split(':')
  hour = Number(hour)
  minute = Number(minute)

  // Handles o'clock
  if (minute == 0) {
    return numbersToWords[hour] + " o'clock"
  }

  // We have 2 categories inside an hour.
  // 1° - hour being before HALF HOUR, <= 0:30
  //    The format is going to be: {MINUTES} 'past' {HOUR}
  if (minute <= 30) {
    return numbersToWords[minute] + ' past ' + numbersToWords[hour]
  }
  // 2° - hour is PAST HALF HOUR, > 0:30
  //    The format is going to be: '{Subtraction, 60 - Minutes} to {HOUR+1}
  if (minute > 30) {
    return numbersToWords[60 - minute] + ' to ' + numbersToWords[hour + 1]
  }

  return "Invalid time";
}

module.exports = { convertTimeToWords };