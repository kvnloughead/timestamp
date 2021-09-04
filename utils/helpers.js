const isInteger = (value) => {
  console.log('value ', value)
  return /^\d+$/.test(value);
}

const getUnixEpoch = (t) => {
  return new Date(isInteger(t) ? parseInt(t) : t).getTime();
}

const getUTCString = (t) => {
  return new Date(isInteger(t) ? parseInt(t) : t).toUTCString();
}

module.exports = {
  getUnixEpoch,
  getUTCString
}