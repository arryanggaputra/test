<x-guest-layout>
    <x-auth-card>
        <x-slot name="logo">
            <a href="/">
                <x-application-logo class="w-20 h-20 fill-current text-gray-500" />
            </a>
        </x-slot>

        <span class="font-medium block">Terima kasih telah mendaftar di situs kami!</span>
        <div class="mb-4 text-sm text-gray-600">
            {{ __('Sebelum memulai, dapatkah Anda memverifikasi alamat email Anda dengan mengklik link yang baru saja kami kirimkan kepada Anda? Jika Anda tidak menerima email tersebut, kami akan dengan senang hati mengirim ulang email tersebut kepada Anda.') }}
        </div>

        @if (session('status') == 'verification-link-sent')
            <div class="mb-4 font-medium text-sm text-green-600">
                {{ __('Tautan verifikasi yang terbaru telah dikirim ke alamat email yang Anda berikan saat pendaftaran.') }}
            </div>
        @endif

        <div class="mt-4 flex items-center justify-between">
            <form method="POST" action="{{ route('verification.send') }}">
                @csrf

                <div>
                    <x-button>
                        {{ __('Kirim Ulang Email Verifikasi') }}
                    </x-button>
                </div>
            </form>

            <form method="POST" action="{{ route('logout') }}">
                @csrf

                <button type="submit" class="underline text-sm text-gray-600 hover:text-gray-900">
                    {{ __('Keluar') }}
                </button>
            </form>
        </div>
    </x-auth-card>
</x-guest-layout>
