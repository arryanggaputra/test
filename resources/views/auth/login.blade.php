<x-guest-layout>
    <x-auth-card>
        <x-slot name="logo">
            <a href="/">
                <x-application-logo class="w-20 h-20 fill-current text-gray-500" />
            </a>
        </x-slot>

        <!-- Session Status -->
        <x-auth-session-status class="mb-4" :status="session('status')" />

        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form method="POST" action="{{ route('login') }}">
            @csrf

            <!-- Email Address -->
            <div>
                <x-label for="email" :value="__('Email')" />

                <x-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus />
            </div>

            <!-- Password -->
            <div class="mt-4">
                <div class="flex flex-row justify-between">
                    <x-label for="password" :value="__('Password')" />

                    @if (Route::has('password.request'))
                        <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('password.request') }}">
                            {{ __('Lupa Password?') }}
                        </a>
                    @endif
                </div>

                <x-input id="password" class="block mt-1 w-full"
                                type="password"
                                name="password"
                                required autocomplete="current-password" />
            </div>

            <!-- Remember Me -->
            <div class="block mt-4">
                <label for="remember_me" class="inline-flex items-center">
                    <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember">
                    <span class="ml-2 text-sm text-gray-600">{{ __('Remember me') }}</span>
                </label>
            </div>

            <div class=" mt-4">


                <x-button class="w-full">
                    <span class="text-center w-full">
                        {{ __('Log in') }}
                    </span>
                </x-button>
            </div>

            <div class="border-t border-gray-200 block mt-5 pt-4">
                <div class="text-center font-bold text-gray-600">
                    {{__("Belum memiliki akun?")}}
                </div>

                <a href="{{ route('register') }}" class=" px-4 py-2 text-sm mt-2 w-full text-center block border border-indigo-600 rounded-md">
                    {{ __('Buat akun baru') }}
                </a>
            </div>
        </form>
    </x-auth-card>
</x-guest-layout>
