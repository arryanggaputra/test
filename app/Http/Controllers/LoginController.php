<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
        $this->middleware('guest:admin')->except('logout');
    }

    public function adminLogin(Request $request)
    {
        $this->validate($request, [
            'email'    => 'required|email',
            'password' => 'required|min:6',
        ]);

        $admin = Auth::guard('admin');
        
        if ($admin->attempt()
        attempt([
            'email'    => $request->email,
            'password' => $request->password],
        )) {
            return "login";
            // return redirect()->intended('/admin');
        }
        throw new Exception("Email dan password salah", 1);

        // return back()->withInput($request->only('email', 'remember'));
    }

    public function index()
    {
        return Inertia::render('Login/index');
    }
}