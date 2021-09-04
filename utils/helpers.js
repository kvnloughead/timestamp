const getUnixEpoch = (t) => {
  return new Date(t).getTime() / 1000
}

const getUTCString = (t) => {
  return new Date(t).toUTCString();
}

module.exports = {
  getUnixEpoch,
  getUTCString
}