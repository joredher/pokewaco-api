<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ApiTest extends TestCase
{
    use WithFaker;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGet()
    {
        $this->withoutExceptionHandling();
        $this->withoutMiddleware();

        $this->actingAs(User::first())
            ->getJson('api/pokeBalls')
            ->assertStatus(200);
    }

    public function testPatch () {
        $this->withoutExceptionHandling();
        $this->withoutMiddleware();

        $pokeBalls = $this->get('api/pokeBalls?offset=1&limit=15');
        $data = collect($pokeBalls->json());

        if (isset($data)) {
            $user = $this->faker->randomElement(User::all()->toArray());
            $selectUrls = $this->faker->randomElements($data->toArray()['data']['results'],5);
            foreach ($selectUrls as $selectUrl) {
                $response = $this->patchJson('api/favoritePokemon/user/'.$user['id'], [
                    'name' => $selectUrl['name'],
                    'ref_api' => $selectUrl['url']
                ]);
                $response->assertOk();
            }
        }
    }
}
