<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class ExamController extends Controller
{
    public function index()
    {
        return Inertia::render('Exams/index');
    }
}