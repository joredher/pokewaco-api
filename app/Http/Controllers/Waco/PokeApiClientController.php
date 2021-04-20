<?php

namespace App\Http\Controllers\Waco;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PokeApiClientController extends Controller
{
    protected $path = 'https://pokeapi.co/api/v2';

    public function index()
    {
        $offset = request()->input('offset');
        $limit = request()->input('limit');
        $apiPoke = Http::get("$this->path/pokemon/?offset=$offset&limit=$limit");
        $data = $apiPoke->json();

        return response()->json([
            'data' => $data
        ])->setStatusCode(200);
    }
}
