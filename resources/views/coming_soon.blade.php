<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Coming Soon</title>
   <style>
      body,
      html {
         margin: 0;
         padding: 0;
         height: 100%;
         width: 100%;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         background-color: #f5f5f5;
         font-family: Arial, sans-serif;
         text-align: center;
      }

      .container {
         flex: 1;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
      }

      .logo {
         max-width: 100px;
         margin-bottom: 20px;
      }

      .contact-info {
         margin-top: auto;
         padding: 20px;
         width: 100%;
         text-align: center;
      }

      a {
         color: #40724D;
      }
   </style>
</head>

<body>
   <div class="container">
      {{-- <img src="ekow-stones-logo.svg" /> --}}
      <x-ui.logo />

      <p style="color:#b6b6b6">Coming Soon</p>
   </div>
   <div class="contact-info">
      <p style="line-height: 1.5;">Email: <a href="mailto:info@ekow-stones.com">info@ekow-stones.com</a><br />Tel: <a
            href="tel:+233556549836">055 6549 836</a>
      </p>
   </div>
</body>

</html>
