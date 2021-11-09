const express = require('express');

const app = express();

//MiddleWare

app.use(express.static(__dirname + '/public'));


// Routes

app.get('/', (request, response) => response.sendFile(__dirname + '/views/home.html'));

app.get('/about', (request, response) => response.sendFile(__dirname + '/views/about.html'));

app.get('/gallery', (request, response) => response.sendFile(__dirname + '/views/work-gallery.html'));

//Server activation

app.listen(3000, ()=>{ 

    console.log('Server active - port 3000')
  })
  