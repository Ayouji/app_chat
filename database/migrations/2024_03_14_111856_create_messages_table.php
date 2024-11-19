<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('chat_id');
            $table->text('message');
            $table->string('ID_Msg');
            $table->timestamp('deleted_at')->nullable();
            $table->text('sizeFile')->nullable();  // Removed default value here
            $table->text('Originale_Name_File')->nullable();
            $table->enum('status_Message', ['audio', 'video', 'text', 'document']);
            $table->timestamps();

            // Add foreign key constraints if necessary
            // $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            // $table->foreign('chat_id')->references('id')->on('chats')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('messages');
    }
}
