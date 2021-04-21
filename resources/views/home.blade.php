<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name','WACO-API') }}</title>
    <!-- Styles -->
    <link rel="icon" href="{{asset('/images/pokeball.png')}}">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
{{--    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">--}}
{{--    <script src="{{ mix('js/app.js') }}"></script>--}}
    <style>
        .modal {
            transition: opacity 0.25s ease;
        }
        body.modal-active {
            overflow-x: hidden;
            overflow-y: visible !important;
        }
        .opacity-95 {opacity: .95;}
    </style>
</head>
<body>
    <div id="app"></div>
</body>
</html>