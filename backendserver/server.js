/* require('dotenv').config(); */
const express = require('express');
const bodyParser = require('body-parser');
/* const Pusher = require('pusher'); */
const { lookup } = require('geoip-lite');

const app = express();
const port = 4000;
/* const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: 'eu',
  encrypted: true,
}); */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.post('/vote', (req, res) => {
  const { body } = req;
  const { player } = body;
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
/*   pusher.trigger('vote-channel', 'vote', {
    player,
  }); */
  console.log(player, lookup(ip));
  res.json({ player });
});

app.get('/handle',(req, res) => {
  //code to perform particular action.
  //To access GET variable use req.query() and req.params() methods.
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log("get req received", ip);
  });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});