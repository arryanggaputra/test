<?php

use App\Http\Controllers\Admin\DashboardController;

Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/home', [DashboardController::class, 'index']);
});
