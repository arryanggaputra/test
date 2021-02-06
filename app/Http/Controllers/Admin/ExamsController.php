<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Answer;
use App\Models\Category;
use App\Models\Exam;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ExamsController extends Controller
{
    public function index(Request $request)
    {
        $exams      = Exam::orderBy('created_at', 'DESC')->with('category')->get();
        $categories = Category::orderBy('created_at', 'DESC')->get();

        return Inertia::render('Auth/Exams/index', [
            'exams'      => $exams,
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $exam              = new Exam();
        $exam->category_id = $request->get('category_id');
        $exam->title       = $request->get('title');
        $exam->description = $request->get('description');
        $exam->save();

        return redirect()->back();
    }

    public function update($id, Request $request)
    {
        $exam = Exam::find($id);

        $exam->title       = $request->get('title');
        $exam->category_id = $request->get('category_id');
        $exam->description = $request->get('description');
        $exam->save();

        return redirect()->to('/admin/exams');
    }

    public function edit($id)
    {
        $exam       = Exam::find($id);
        $categories = Category::orderBy('created_at', 'DESC')->get();
        return Inertia::render('Auth/Exams/index', [
            'isEdit'     => true,
            'exam'       => $exam,
            'categories' => $categories,
        ]);
    }

    public function questions($id)
    {
        $exam     = Exam::with('category')->find($id);
        $questons = Question::with('answer')->where('exam_id', $id)->get();
        return Inertia::render('Auth/Exams/ExamQuestion', [
            'exam'     => $exam,
            'questons' => $questons,
        ]);
    }
    public function questionsAdd($id)
    {
        $exam = Exam::with('category')->find($id);
        return Inertia::render('Auth/Exams/ExamQuestionAdd', [
            'exam' => $exam,
        ]);
    }

    public function questionsDelete($id, $questionId)
    {
        DB::beginTransaction();
        Answer::where('question_id', $questionId)->delete();
        Question::where('id', $questionId)->delete();
        DB::commit();
        return redirect()->back();
    }

    public function questionsEdit($id, $questionId)
    {
        $exam     = Exam::with('category')->find($id);
        $question = Question::with('answer')->find($questionId);

        return Inertia::render('Auth/Exams/ExamQuestionAdd', [
            'exam'     => $exam,
            'isEdit'   => true,
            'question' => $question,
        ]);
    }

    public function questionsStore($id)
    {
        $exam = Exam::find($id);
        $this->generateQuestionAndAnswer('CREATE', $exam);

        return redirect()->to('/admin/exams/' . $id . '/questions');
    }

    public function questionsUpdate($id, $questionId)
    {
        $exam     = Exam::find($id);
        $question = Question::find($questionId);
        $this->generateQuestionAndAnswer('EDIT', $exam, $question);

        return redirect()->to('/admin/exams/' . $id . '/questions');
    }

    public function delete($id)
    {
        $exam = Exam::find($id);
        $exam->delete();
        return redirect()->back();
    }

    private function generateQuestionAndAnswer(string $method, $exam, $question = null)
    {
        DB::beginTransaction();

        $_question           = request('question');
        $_questionDiscussion = request('questionDiscussion');
        $_answers            = request('answers');
        $_correctAnswer      = request('selectedAnswer');

        $question              = $question === null ? new Question() : Question::find($question->id);
        $question->description = $_question;
        $question->discussion  = $_questionDiscussion;
        $question->exam_id     = $exam->id;
        $question->category_id = $exam->category_id;
        $question->save();

        if ($method !== 'CREATE') {
            Answer::where('question_id', $question->id)->delete();
        }

        $listAnswer = array();

        foreach ($_answers as $ans) {
            $listAnswer[] = [
                'question_id' => $question->id,
                'description' => $ans['description'],
                'value'       => $ans['value'],
                'is_correct'  => $ans['value'] === $_correctAnswer ? true : false,
            ];
        }

        usort($listAnswer, function ($a, $b) {
            return strcasecmp($a['value'], $b['value']);
        });

        Answer::insert($listAnswer);

        DB::commit();
    }

}