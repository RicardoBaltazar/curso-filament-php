<?php

namespace App\Filament\Resources\Products\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class ProductForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(2)
            ->components([
                TextInput::make('name')
                    ->label('Nome do Produto')
                    ->required()
                    ->maxLength(255),
                    
                TextInput::make('price')
                    ->label('Preço')
                    ->required()
                    ->numeric()
                    ->prefix('R$')
                    ->step(0.01)
                    ->minValue(0),
                    
                TextInput::make('stock')
                    ->label('Estoque')
                    ->required()
                    ->numeric()
                    ->default(0)
                    ->minValue(0),
                    
                Toggle::make('is_active')
                    ->label('Ativo')
                    ->default(true),
                    
                Textarea::make('description')
                    ->label('Descrição')
                    ->columnSpanFull()
                    ->rows(3),
            ]);
    }
}
