<?php

use App\Models\Message;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            // $table->enum('status_Message',['audio','vidio','text','file']);
            // $table->text('reports');
            $table->softDeletes();
            $table->unsignedBigInteger('user_id');
            
            $table->foreignIdFor(Message::class)->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedBigInteger('reportMsg_id');
            $table->foreign('reportMsg_id')->references('id')->on('messages')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reports');
    }
};
