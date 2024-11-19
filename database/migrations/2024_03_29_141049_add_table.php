<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        DB::statement("ALTER TABLE `messages` CHANGE `status_Message` `status_Message` ENUM('audio','video','text','document','image') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ;");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
