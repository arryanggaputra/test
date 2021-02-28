<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DeleteExamIdInQuestionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::table('questions', function (Blueprint $table) {
            $table->dropForeign(['exam_id']);
            $table->dropColumn('exam_id');
        });
        Schema::enableForeignKeyConstraints();

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0;');
        Schema::table('questions', function (Blueprint $table) {
            $table->foreignId('exam_id')->constrained();
        });
        DB::statement('SET FOREIGN_KEY_CHECKS = 1;');
    }
}