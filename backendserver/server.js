/* require('dotenv').config(); */
const express = require('express');
const bodyParser = require('body-parser');
/* const Pusher = require('pusher'); */
const { lookup } = require('geoip-lite');

const mongo = require('mongodb').MongoClient
const mongoUrl = 'mongodb://localhost:27017'
ObjectID = require('mongodb').ObjectId


const app = express();
const port = 4000;
/* const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: 'eu',
  encrypted: true,
}); */

//------------------DB---------------------------

function addVoteToDb(vote) {
  mongo.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) {
      console.error(err)
      return
    }
    const db = client.db('voteDB')
    const collection = db.collection('votes')
    collection.insertOne(vote, function(err, res) {
      if (err) throw err;
      console.log("1 vote inserted");
      client.close();
    });
  })
}

//-----------------------------------------------

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
  const { vote } = body;
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
/*   pusher.trigger('vote-channel', 'vote', {
    player,
  }); */
  let data = { votedSong: vote, name: player.name, email: player.email, country: player.pays, prov: player.province, ipAdd: ip};
  console.log(data);
  addVoteToDb(data);
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