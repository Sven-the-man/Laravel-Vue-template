<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meal extends Model
{
    use HasFactory;

    function ingredients() {
        return $this->hasMany(Ingredient::class);
    }

    protected $fillable = ['name'];
}
