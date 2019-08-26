<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Events\ProjectCreated;

class Project extends Model
{

    protected $dispatchesEvents = [
        'created' => ProjectCreated::class
    ];

    //Prevents mass assignment
    protected $fillable = [
        "title",
        "description",
        'owner_id'
    ];

    public function owner() {
        return $this->belongsTo(User::class);
    }

    public function tasks() {
        return $this->hasMany(Task::class);
    }

    public function addTask($task) {
        return $this->tasks()->create($task);
    }
}
