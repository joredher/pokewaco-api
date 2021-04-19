<?php

namespace App\Http\Controllers\Waco;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function index()
    {
        //
    }

    public function store(Request $request): JsonResponse
    {
        $this->getValidate($request);

        $this->register($request);

        return response()->json([
            'message' => 'El usuario fue creado correctamente!'
        ], 201);
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id): JsonResponse
    {
        $this->register($request, $id);

        return response()->json([
            'message' => 'Se han actualizado los datos correctamente!'
        ], 201);
    }

    public function destroy($id)
    {
        //
    }

    /**
     * @param Request $request
     * @param null $id
     * @return User
     */
    public function register(Request $request, $id = null): User
    {
        $user = $id ? User::find($id) : new User();
        $user->fill($request->except('password'));

        if (($id && (!Hash::check($request->password, $user->password))) || (!$id)) {
            $user->password = bcrypt($request->password);
        }

        $user->save();

        return $user;
    }

    /**
     * @param Request $request
     * @return array
     */
    protected function getValidate(Request $request): array
    {
        return $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string'
        ]);
    }
}
