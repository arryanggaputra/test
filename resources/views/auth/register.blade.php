<x-guest-layout>
    <x-auth-card>
        <x-slot name="logo">
            <a href="/">
                <x-application-logo class="w-20 h-20 fill-current text-gray-500" />
            </a>
        </x-slot>

        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form method="POST" action="{{ route('register') }}">
            @csrf

            <!-- Name -->
            <div>
                <x-label for="name" :value="__('Nama Lengkap')" />

                <x-input id="name" class="block mt-1 w-full" type="text" name="name" :value="old('name')" required autofocus />
            </div>

            <!-- Email Address -->
            <div class="mt-4">
                <x-label for="email" :value="__('Alamat Email')" />

                <x-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required />
            </div>

            <div class="mt-4 rounded-md bg-green-200 p-4">
                <span class="font-medium">Aturan pengisian password:</span>
                <ul class="text-sm">
                    <li>- Minimal 8 karakter</li>
                    <li>- Terdapat huruf kecil, besar, dan angka</li>
                </ul>
            </div>

            <!-- Password -->
            <div class="mt-4">
                <x-label for="password" :value="__('Password')" />

                <x-input id="password" class="block mt-1 w-full"
                                type="password"
                                name="password"
                                required autocomplete="new-password" />
            </div>

            <!-- Confirm Password -->
            <div class="mt-4">
                <x-label for="password_confirmation" :value="__('Ulangi Password')" />

                <x-input id="password_confirmation" class="block mt-1 w-full"
                                type="password"
                                name="password_confirmation" required />
            </div>

            <x-button class="w-full mt-4">
                <span class="block text-center w-full">
                    {{ __('Daftar Sekarang') }}
                </span>
            </x-button>

        </form>
        <div class="block text-center mt-4">
            Sudah memiliki akun?
            <a class="underline text-sm text-gray-600 pl-2 hover:text-gray-900" href="{{ route('login') }}">
                {{ __(' Login Sekarang!') }}
            </a>
        </div>
    </x-auth-card>
</x-guest-layout>
