'use strict';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import path from 'path';
import App from './components/app';

var app = express();

// Serve js assets
//app.use("/assets", express.static(path.join(__dirname, "/../assets/")));
app.use("/assets", express.static("assets/"));

app.get('/', (req, res) => {

    const content     = ReactDOMServer.renderToStaticMarkup(<App />);
    const baseUrl = process.env.BASE_URL || '';
    const html        = `<html>
            <head>
            </head>
            <body>
                <div id="content">${content}</div>
                <script src="${baseUrl}/assets/js/client.js"></script>
            </body>
         </html>`;

    res.send(html);
});

//  Set the environment variables we need.
const ipaddress = process.env.IP || 'localhost';
const port      = process.env.PORT || 3000;

app.listen(port, ipaddress, function() {
    console.log('Express server listening on port ' + this.address().port);
});