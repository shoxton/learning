<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;
use App\Events\ProjectCreated;

class ProjectsController extends Controller
{

    public function __construct() {
        $this->middleware('auth');
        $this->middleware('can:update,project')
            ->except(['index','create','store']);
    }

    public function index() {
        return view('project.index', ['projects' => auth()->user()->projects]);
    }

    public function create() {
        return view('project.create');
    }

    public function store() {
        
        $attributes = $this->validateProject();

        $attributes['owner_id'] = auth()->id();

        $project = Project::create($attributes);

        return redirect()->route('projects.show',[$project]);
    }

    public function update(Project $project) {
        $project->update($this->validateProject());

        return redirect()->route('projects.show',[$project]);
    }

    public function show(Project $project) {
        return view('project.show', compact('project'));
    }

    public function edit(Project $project) {
        return view('project.edit', compact('project'));
    }

    public function destroy(Project $project) {
        $project->delete();

        return redirect('/projects');
    }

    public function validateProject() {
        return request()->validate([
            "title" => "required|min:3|max:50",
            "description" => "required|min:3"
        ]);
    }
}
