const express = require('express');

const app = express();

//MiddleWare

app.use(express.static('./public'));

// Routes

app.get('/home', (request, response) => response.sendFile(__dirname + '/views/home.html'));

app.get('/about', (request, response) => response.sendFile(__dirname + '/views/about.html'));

app.get('/gallery', (request, response) => response.sendFile(__dirname + '/views/work-gallery.html'));

//Server activation

app.listen(3000, ()=>{ 

    console.log('Servidor activo en el puerto 3000')
  })
  