<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('coming_soon');
});
Route::get('/alpha', function(){
    return view('homepage');
});
