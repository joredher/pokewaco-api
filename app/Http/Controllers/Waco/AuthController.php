<?php

namespace App\Http\Controllers\Waco;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(): JsonResponse
    {
        try {
            $credentials = $this->validate(request(), [
                'email' => 'required|email|string',
                'password' => 'required|string',
            ]);

            if (!$credentials) {
                return response()->json(['error' => 'Credenciales incorrectas'], 422);
            }

            $token = Auth::attempt($credentials);

            if (!$token) {
                return response()->json(['error' => 'Credenciales incorrectas'], 422);
            } else {
                return $this->respondWithToken($token);
            }
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 413);
        }
    }

    /**
     * @param $token
     * @return JsonResponse
     */
    protected function respondWithToken($token): JsonResponse
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => 12000,
            'user' => Auth::user(),
        ]);
    }
}
