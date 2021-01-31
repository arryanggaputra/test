<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Exam;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExamsController extends Controller
{
    public function index(Request $request)
    {
        $exams      = Exam::orderBy('created_at', 'DESC')->with('category')->get();
        $categories = Category::orderBy('created_at', 'DESC')->get();

        return Inertia::render('Auth/Exams/index', [
            'exams'      => $exams,
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $exam              = new Exam();
        $exam->category_id = $request->get('category_id');
        $exam->title       = $request->get('title');
        $exam->description = $request->get('description');
        $exam->save();

        return redirect()->back();
    }

    public function update($id, Request $request)
    {
        $exam = Exam::find($id);

        $exam->title       = $request->get('title');
        $exam->category_id = $request->get('category_id');
        $exam->description = $request->get('description');
        $exam->save();

        return redirect()->to('/admin/exams');
    }

    public function edit($id)
    {
        $exam       = Exam::find($id);
        $categories = Category::orderBy('created_at', 'DESC')->get();
        return Inertia::render('Auth/Exams/index', [
            'isEdit'     => true,
            'exam'       => $exam,
            'categories' => $categories,
        ]);
    }

    public function questions($id)
    {
        $exam = Exam::with('category')->find($id);
        return Inertia::render('Auth/Exams/AddQuestion', [
            'exam' => $exam,
        ]);
    }

    public function delete($id)
    {
        $exam = Exam::find($id);
        $exam->delete();
        return redirect()->back();
    }

}