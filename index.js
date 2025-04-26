const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/', (req, res) => {
  res.send('Bot is active! 🟢');
});

app.listen(3000, () => {
  console.log('Web server started on port 3000');
});

// Server IP and Port
const serverIP = 'entity3031234.aternos.me';
const serverPort = 16982;

const pingServer = () => {
  const url = `https://api.mcsrvstat.us/2/${serverIP}:${serverPort}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.online) {
        console.log(`[${new Date().toLocaleTimeString()}] Server is online with ${data.players.online} players.`);
      } else {
        console.log(`[${new Date().toLocaleTimeString()}] Server is offline.`);
      }
    })
    .catch(err => console.error('Error pinging server:', err));
};

// Ping every 5 minutes
setInterval(pingServer, 5 * 60 * 1000);

// Initial ping
pingServer();
