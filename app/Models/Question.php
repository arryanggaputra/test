<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Question extends Model
{
    use HasFactory, SoftDeletes;

    public function answer()
    {
        return $this->hasMany(Answer::class);
    }

    public function exams()
    {
        return $this->belongsToMany(Exam::class);
    }
}