<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;

class ProjectsController extends Controller
{

    public function __construct() {
        $this->middleware('auth');
        $this->middleware('can:update,project')
            ->except(['index','create','store']);
    }

    public function index() {
        $projects = Project::where('owner_id',auth()->id())->get();
        return view('project.index', compact('projects'));
    }

    public function create() {
        return view('project.create');
    }

    public function store() {

        $attributes = request()->validate([
            "title" => "required|min:3|max:50",
            "description" => "required|min:3"
        ]);

        $attributes['owner_id'] = auth()->id();

        $project = Project::create($attributes);

        return redirect()->route('projects.show',[$project]);
    }

    public function update(Project $project) {
        $project->update(request(["title","description"]));

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
}
