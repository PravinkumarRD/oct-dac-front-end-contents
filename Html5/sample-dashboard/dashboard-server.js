const express = require('express');
const WebSocket = require('ws');

const app = express();
const port = 3000;

// Serve static files (if any) like HTML, CSS, JS for client-side
app.use(express.static('public'));

// Create WebSocket server
const wss = new WebSocket.Server({ noServer: true });

// When a client connects to WebSocket
wss.on('connection', (ws) => {
  console.log('A client connected');

  // Send 10 random numbers every 2 seconds
  setInterval(() => {
    const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
    ws.send(JSON.stringify(numbers)); // send numbers to the client
  }, 2000);
});

// Handle HTTP upgrade to WebSocket
app.server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});
