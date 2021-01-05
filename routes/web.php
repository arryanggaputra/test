<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

// Route::middleware('admin', function () {
// });

// Route::get('/exams', [ExamController::class, 'index']);

Route::group(['prefix' => 'admin'], function () {
    Route::group(['middleware' => ['guest:admin']], function () {
        Route::get('/login', [LoginController::class, 'index']);
        Route::post('/login', [LoginController::class, 'adminLogin']);
    });

    Route::group(['middleware' => ['admin']], function () {
        Route::get('/', [DashboardController::class, 'index']);
        Route::get('/logout', [LoginController::class, 'logout']);
    });
});