<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home Page (Alpha)</title>
    @vite('resources/css/app.css')
</head>
<body>
    <section>
        <div class="flex justify-between items-center">
            <x-ui.logo width="180" height="55" />
            <ul id="desktopMenu" class="flex space-x-4">
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </section>
</body>
</html>
