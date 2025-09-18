<?php

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
        Schema::table('users', function (Blueprint $table) {
            // Colonnes prénom / nom
            $table->string('first_name')->after('id')->nullable();
            $table->string('last_name')->after('first_name')->nullable();

            // Autres informations utilisateur
            $table->string('agency')->after('password')->nullable();
            $table->string('phone')->after('agency')->nullable();
            $table->string('address')->after('phone')->nullable();
            $table->string('user_type')->after('address')->nullable();
            $table->date('date_of_birth')->after('user_type')->nullable();
            $table->string('document_type')->after('date_of_birth')->nullable();
            $table->string('document_id')->after('document_type')->nullable();

            // Colonnes pour tracer qui a créé / modifié
            $table->unsignedBigInteger('created_by')->nullable()->after('document_id');
            $table->unsignedBigInteger('updated_by')->nullable()->after('created_by');

            // Clés étrangères optionnelles
            $table->foreign('created_by')->references('id')->on('users')->onDelete('set null');
            $table->foreign('updated_by')->references('id')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Supprimer d'abord les clés étrangères
            $table->dropForeign(['created_by']);
            $table->dropForeign(['updated_by']);

            // Supprimer les colonnes ajoutées
            $table->dropColumn([
                'first_name', 'last_name', 'agency', 'phone', 'address', 
                'user_type', 'date_of_birth', 'document_type', 'document_id', 
                'created_by', 'updated_by'
            ]);
        });
    }
};
