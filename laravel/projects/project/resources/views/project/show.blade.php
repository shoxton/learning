@extends('layout')

@section('content')

    <a href="/projects/{{$project->id}}/edit">edit</a>

    <div class="row">
        <div class="col-md-8">
            <h1 class="title">
                {{$project->title}}
            </h1>
            <p>
                {{$project->description}}
            </p>
        </div>
        <div class="col-md-4">
            <form class="form-inline mb-2" action="/projects/{{$project->id}}/tasks" method="POST">

                @csrf

                <input name="description" style="flex:1" class="form-control mr-sm-2" type="search" placeholder="Add new task">
                <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Add</button>

            </form>
            @if($project->tasks->count())
                <div class="list-group">
                    @foreach($project->tasks as $task)
                        <form action="/tasks/{{$task->id}}" method="POST">

                            @method('PATCH')
                            @csrf

                            <div href="#" class="list-group-item d-flex justify-content-between align-items-center">
                            <input name="completed" onChange="this.form.submit()" type="checkbox" id="inlineCheckbox_{{$task->id}}" {{ $task->completed ? 'checked' : '' }}>
                                <label class="form-check-label {{ $task->completed ? 'is-completed' : '' }}" for="inlineCheckbox_{{$task->id}}">{{$task->description}}</label>
                                @if($task->completed)
                                    <span class="badge badge-success badge-pill">COMPLETED</span>
                                @else
                                    <span class="badge badge-warning badge-pill">UNCOMPLETE</span>
                                @endif
                            </div>
                            
                        </form>
                    @endforeach
                </div>
            @endif
        </div>
    </div>

    
@endsection