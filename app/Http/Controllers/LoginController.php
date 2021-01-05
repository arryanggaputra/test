<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class LoginController extends Controller
{
    protected $guard = 'admin';

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'email'    => 'required|email|max:255|unique:admins',
            'password' => 'required|min:6|confirmed',
        ]);
    }

    public function logout()
    {
        //  $this->
        Auth::guard('admin')->logout();
        return redirect('/admin/login');
    }

    public function adminLogin(Request $request)
    {

        $this->validate($request, [
            'email'    => 'required',
            'password' => 'required',
        ]);

        $admin = Admin::where('email', $request->email)->first();

        if (!$admin) {
            return redirect()->back()->with('message', 'Incorrect email address or password');
        }

        if (Hash::check($request->password, $admin->password)) {
            Auth::guard('admin')->login($admin);
            return redirect('/admin');
        }

        return redirect()
            ->back()
            ->withInput($request->only('email', 'remember'))
            ->withErrors(['email' => 'Incorrect email address or password']);
    }

    public function index()
    {
        return Inertia::render('Login/index');
    }
}