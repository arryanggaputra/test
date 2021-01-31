<?php

use App\Http\Controllers\Admin\CategoriesController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ExamsController;
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

        Route::get('/categories', [CategoriesController::class, 'index']);
        Route::get('/categories/{id}', [CategoriesController::class, 'edit']);
        Route::post('/categories', [CategoriesController::class, 'store']);
        Route::delete('/categories/{id}', [CategoriesController::class, 'delete']);
        Route::put('/categories/{id}', [CategoriesController::class, 'update']);

        Route::get('/exams', [ExamsController::class, 'index']);
        Route::get('/exams/{id}', [ExamsController::class, 'edit']);
        Route::get('/exams/{id}/questions', [ExamsController::class, 'questions']);
        Route::post('/exams', [ExamsController::class, 'store']);
        Route::delete('/exams/{id}', [ExamsController::class, 'delete']);
        Route::put('/exams/{id}', [ExamsController::class, 'update']);

        Route::get('/logout', [LoginController::class, 'logout']);
    });
});