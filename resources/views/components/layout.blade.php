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

   <!-- Favicon Links -->
   <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
   <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
   <link rel="icon" href="/favicon-96x96.png" sizes="96x96" />
   <link rel="icon" href="/favicon-144x144.png" sizes="144x144" />
   <link rel="icon" href="/favicon-192x192.png" sizes="192x192" />
   <link rel="icon" href="/favicon-310x310.png" sizes="310x310" />

   <!-- Apple Touch Icons -->
   <link rel="apple-touch-icon" href="/apple-icon-60x60.png" sizes="60x60" />
   <link rel="apple-touch-icon" href="/apple-icon-76x76.png" sizes="76x76" />
   <link rel="apple-touch-icon" href="/apple-icon-120x120.png" sizes="120x120" />
   <link rel="apple-touch-icon" href="/apple-icon-152x152.png" sizes="152x152" />
   <link rel="apple-touch-icon" href="/apple-icon-180x180.png" sizes="180x180" />

   <!-- Android Icons -->
   <link rel="icon" href="/android-icon-36x36.png" sizes="36x36" />
   <link rel="icon" href="/android-icon-48x48.png" sizes="48x48" />
   <link rel="icon" href="/android-icon-72x72.png" sizes="72x72" />
   <link rel="icon" href="/android-icon-76x76.png" sizes="76x76" />
   <link rel="icon" href="/android-icon-192x192.png" sizes="192x192" />

   <!-- Windows Icons -->
   <link rel="icon" href="/ms-icon-70x70.png" sizes="70x70" />
   <link rel="icon" href="/ms-icon-150x150.png" sizes="150x150" />
   <link rel="icon" href="/ms-icon-310x310.png" sizes="310x310" />
</head>

<body>
   {{ $content }}


   @vite('resources/js/app.js')
</body>

</html>
