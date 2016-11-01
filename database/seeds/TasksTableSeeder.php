<?php

use Illuminate\Database\Seeder;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        for ($i = 0; $i < 50; $i++) {
            \App\User::create([
                'task' => $faker->sentences(5),
                'priority' => $faker->numberBetween(0,10),
                'done' => $faker->numberBetween(0,1)
            ]);
        }
    }
}
