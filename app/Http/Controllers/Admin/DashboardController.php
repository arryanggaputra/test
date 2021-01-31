<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Exam;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $categoryTotal = Category::count();
        $examTotal     = Exam::count();

        return Inertia::render('Auth/Dashboard/index', [
            'categoryTotal' => $categoryTotal,
            'examTotal'     => $examTotal,
        ]);
    }
}