<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamQuestion extends Model
{
    protected $table = 'exam_question';

    use HasFactory;

    public function exams()
    {
        return $this->belongsToMany(Exam::class);
    }

}