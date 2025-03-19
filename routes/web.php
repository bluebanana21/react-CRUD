<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('hello', function () {
    return Inertia::render('hello');
});

Route::get('/login', function () {
    return Inertia::render('userAuth/login');
});

Route::get('/register', function () {
    return Inertia::render('userAuth/register');
});

Route::get('/products', function () {
    return Inertia::render('product');
});

// Route::get('/products/create', function () {
//     return Inertia::render('products/form/create-product');
// });

Route::get('/orders', function () {
    return Inertia::render('order');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
