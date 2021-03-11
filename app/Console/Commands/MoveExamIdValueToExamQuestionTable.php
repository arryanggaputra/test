<?php

namespace App\Console\Commands;

use App\Models\ExamQuestion;
use App\Models\Question;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class MoveExamIdValueToExamQuestionTable extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'MoveExamIdValueToExamQuestionTable';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'move exam_id value from questions table to exam_question table';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        DB::beginTransaction();

        $questions        = Question::get();
        $questionExamList = [];
        foreach ($questions as $question) {
            $questionExamList[] = [
                'exam_id'     => $question->exam_id,
                'question_id' => $question->id,
                'created_at'  => date('Y-m-d H:i:s'),
                'updated_at'  => date('Y-m-d H:i:s'),
            ];
        }

        ExamQuestion::insert($questionExamList);
        // dd($questionExamList);

        DB::commit();
    }
}