<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::factory(15)->create();
        
        // Criar alguns produtos específicos
        Product::create([
            'name' => 'Notebook Dell',
            'description' => 'Notebook Dell Inspiron 15 com Intel i7 e 16GB RAM',
            'price' => 2999.99,
            'stock' => 5,
            'is_active' => true,
        ]);
        
        Product::create([
            'name' => 'Mouse Gamer',
            'description' => 'Mouse gamer RGB com alta precisão para jogos',
            'price' => 199.99,
            'stock' => 25,
            'is_active' => true,
        ]);
        
        Product::create([
            'name' => 'Teclado Mecânico',
            'description' => 'Teclado mecânico RGB com switches blue',
            'price' => 350.00,
            'stock' => 8,
            'is_active' => true,
        ]);
    }
}
