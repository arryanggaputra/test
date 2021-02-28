<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Exam extends Model
{
    use HasFactory, SoftDeletes;

    public function questions()
    {
        return $this->belongsToMany(Question::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}