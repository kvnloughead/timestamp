const { getUnixEpoch, getUTCString } = require('./utils/helpers')

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/hello', function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get('/api/:time', (req, res) => {
  const { time } = req.params;
  res.json({ "unix": getUnixEpoch(time), "utc": getUTCString(time) })
});

const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
