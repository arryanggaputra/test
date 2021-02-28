@props(['errors'])

@if ($errors->any())
    <div {{ $attributes->merge(['class' => 'bg-red-600 rounded-md p-5']) }}>
        <div class="font-medium text-white">
            {{ __('Whoops! Ada yang salah.') }}
        </div>

        <ul class="mt-3 list-disc list-inside text-sm text-white">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
