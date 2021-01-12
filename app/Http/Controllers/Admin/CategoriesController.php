<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoriesController extends Controller
{
    public function index(Request $request)
    {
        $categories = Category::orderBy('created_at', 'DESC')->get();

        return Inertia::render('Auth/Categories/index', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $category              = new Category();
        $category->title       = $request->get('title');
        $category->description = $request->get('description');
        $category->save();

        return redirect()->back();
    }

    public function update($id, Request $request)
    {
        $category = Category::find($id);

        $category->title       = $request->get('title');
        $category->description = $request->get('description');
        $category->save();

        return redirect()->to('/admin/categories');
    }

    public function edit($id)
    {
        $category = Category::find($id);
        return Inertia::render('Auth/Categories/index', [
            'isEdit'   => true,
            'category' => $category,
        ]);
    }

    public function delete($id)
    {
        $category = Category::find($id);
        $category->delete();
        return redirect()->back();
    }

}