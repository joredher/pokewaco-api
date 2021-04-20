<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth'], function () {
    Route::post('login','Waco\AuthController@login');
    Route::post('register','Waco\UserController@store');
});

Route::group([
    'middleware' => 'auth:api'
], function () {
    Route::get('home','HomeController@index')->name('home');
    Route::post('user/{id}','Waco\UserController@update');

    Route::get('pokeBalls','Waco\PokeApiClientController@index');
    Route::patch('favoritePokemon/user/{id}','Waco\UserController@selectionOfFavoritePokemonByUser');
    Route::get('user_favorites/{id}','Waco\UserController@getFavoritesUser');
});
