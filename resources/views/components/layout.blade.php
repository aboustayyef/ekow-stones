@php
   $meta_title = $title;
   $meta_description =
       'Ekow Stones: Premium natural and artificial stone installations in Ghana, delivering exceptional craftsmanship and quality finishes.';
   $meta_image = asset('/storage/img/ekow-stones-external-walls.jpg');
@endphp
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>{{ $title }}</title>
   <style>
      {!! Vite::content('resources/css/app.css') !!}
   </style>
   <!-- Google Fonts -->
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">
   <meta property="og:title" content="{{ $meta_title }}">
   <meta property="og:description" content="{{ $meta_description }}">
   <meta property="og:image" content="{{ $meta_image }}">
   <meta property="og:url" content="{{ url()->current() }}">
   <meta name="twitter:card" content="summary_large_image">
   <meta name="twitter:title" content="{{ $meta_title }}">
   <meta name="twitter:description" content="{{ $meta_description }}">
   <meta name="twitter:image" content="{{ $meta_image }}">
   <link rel="icon" href="/favicon.ico" type="image/x-icon">
   <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
   <link rel="icon" type="image/png" sizes="32x32" href="/icon_32x32.png">
   <link rel="icon" type="image/png" sizes="16x16" href="/icon_16x16.png">
</head>

<body>
   {{ $content }}


   @vite('resources/js/app.js')
</body>

</html>
