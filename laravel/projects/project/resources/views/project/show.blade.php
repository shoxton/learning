@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <a href="/projects/{{$project->id}}/edit">edit</a>
            <h1 class="title">
                    {{$project->title}}
            </h1>
            <p>
                {{$project->description}}
            </p>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">Project tasks</div>

                <div class="card-body">
                    <form class="form-inline mb-2" action="/projects/{{$project->id}}/tasks" method="POST">

                        @csrf
        
                        <input required name="description" style="flex:1" class="form-control mr-sm-2 {{ $errors->has('description') ? 'is-invalid' : '' }}" type="search" placeholder="Add new task">
                        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Add</button>
        
                        @if($errors->has('description'))
                            <div class="invalid-feedback">
                                Please provide a description.
                            </div>
                        @endif
        
                    </form>
                    @if($project->tasks->count())
                        <div class="list-group">
                            @foreach($project->tasks as $task)
                                <form action="/tasks/{{$task->id}}" method="POST">
        
                                    @method('PATCH')
                                    @csrf
                                    <label style="cursor: pointer" class="form-check-label d-flex align-items-center justify-content-between list-group-item list-group-item-action mb-2 {{ $task->completed ? 'is-completed' : '' }}" for="inlineCheckbox_{{$task->id}}">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <input name="completed" onChange="this.form.submit()" type="checkbox" id="inlineCheckbox_{{$task->id}}" {{ $task->completed ? 'checked' : '' }} style="margin-right: 15px" >
                                            <div class="d-flex" style="word-break:break-word" >{{$task->description}}</div>
                                        </div>
                                        
                                        @if($task->completed)
                                            <span class="badge badge-success badge-pill">COMPLETED</span>
                                        @else
                                            <span class="badge badge-warning badge-pill">INCOMPLETE</span>
                                        @endif
                                    </label>
                                    
                                </form>
                            @endforeach
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection