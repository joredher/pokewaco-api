<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UsersTest extends TestCase
{
    use WithFaker;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testCreateUserInvalid()
    {
        $response = $this->postJson('/api/auth/register', []);
        $response->assertStatus(422)->assertJsonValidationErrors([
            'password',
            'email',
            'name'
        ]);
    }

    public function testCreate()
    {
//        $this->withExceptionHandling();
        foreach ($this->makeUsers() as $user) {
            $response = $this->postJson('register',$user);
            $response->assertStatus(201);
        }

    }


    public function makeUsers(): array
    {
        $data = [];

        for ($i = 0; $i < 10; $i++) {
            $password = 'pruebawaco2020';
            $name = $this->faker->name;
            $email = $this->faker->email;
            array_push($data, [
                'name' => $name,
                'email' => $email,
                'password' => $password,
                'address' => $this->faker->address,
                'birthdate' => $this->faker->date('Y-m-d'),
                'city' => $this->faker->city
            ]);
        }

        return $data;
    }
}
