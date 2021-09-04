const isInteger = (value) => {
  return /^\d+$/.test(value);
}

const isValidDate = (date) => {
  return !isNaN(date.getTime());
}

module.exports = {
  isValidDate,
  isInteger
}