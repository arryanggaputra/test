<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Answer;
use App\Models\Category;
use App\Models\Exam;
use App\Models\ExamQuestion;
use App\Models\Question;
use Illuminate\Database\Eloquent\Model;
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
        $exam = Exam::with(['category', 'questions' => function ($table) {
            $table->with('answer');
        }])->find($id)->toArray();

        return Inertia::render('Auth/Exams/ExamQuestion', [
            'exam'      => $exam,
            'questions' => $exam['questions'],
        ]);
    }

    public function questionsAdd($id)
    {
        $exam = Exam::with('category')->find($id);
        return Inertia::render('Auth/Exams/ExamQuestionAdd', [
            'exam' => $exam,
        ]);
    }

    public function questionsImport($id, Request $request)
    {

        $exam       = Exam::with('category')->find($id);
        $categories = Category::orderBy('created_at', 'DESC')->get();

        $questions = Question::select(['id', 'description']);

        /**
         * if has category id
         */
        if ($request->has('categoryId')) {
            $questions->where('category_id', $request->get('categoryId'));
        }

        /**
         * if has category id
         */
        if ($request->has('query')) {
            $questions->where('description', 'like', '%' . $request->get('query') . '%');
        }

        if ($request->has('categoryId') || $request->has('query')) {
            return $questions->take(12)->get()->toJson();
        }

        return Inertia::render('Auth/Exams/ExamQuestionImport', [
            'exam'       => $exam,
            'categories' => $categories,
            'questions'  => $questions->take(12)->get(),
        ]);
    }

    public function questionsImportStore($id, Request $request)
    {
        $bulkQuestion = $request->get('selectedQuestions');

        DB::beginTransaction();

        $lists = [];
        foreach ($bulkQuestion as $questionId) {
            $lists[] = [
                'exam_id'     => $id,
                'question_id' => $questionId,
                'created_at'  => date('Y-m-d H:i:s'),
                'updated_at'  => date('Y-m-d H:i:s'),
            ];
        }

        ExamQuestion::insert($lists);

        DB::commit();

        return redirect()->to('/admin/exams/' . $id . '/questions');

    }

    public function questionsDelete($id, $questionId)
    {
        DB::beginTransaction();

        Question::where('id', $questionId)->delete();
        Answer::where('question_id', $questionId)->delete();
        ExamQuestion::where('exam_id', $id)->where('question_id', $questionId)->delete();

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

    private function generateQuestionAndAnswer(string $method, Model $exam, $question = null)
    {
        DB::beginTransaction();

        $_question           = request('question');
        $_questionDiscussion = request('questionDiscussion');
        $_answers            = request('answers');
        $_correctAnswer      = request('selectedAnswer');

        $question              = $question === null ? new Question() : Question::find($question->id);
        $question->description = $_question;
        $question->discussion  = $_questionDiscussion;
        $question->category_id = $exam->category_id;

        $question->save();

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

        if ($method === 'EDIT') {

            /**
             * Remove previous answer of a question
             */
            Answer::where('question_id', $question->id)->delete();
        } else {
            /**
             * create relationship
             */
            $examQuestionRelation              = new ExamQuestion();
            $examQuestionRelation->exam_id     = $exam->id;
            $examQuestionRelation->question_id = $question->id;
            $examQuestionRelation->save();
        }

        Answer::insert($listAnswer);

        DB::commit();
    }

}