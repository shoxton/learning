@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="row justify-content-between align-items-center mb-4 col">
                <h1>Projects</h1>
                <a href="/projects/create">
                    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
                        Create
                    </button>
                </a>
            </div>
            <div class="row">
                @if (!$projects->count())
                    <div class="col">
                        <p>You still haven't created any project.</p>
                        <p><a href="/projects/create">Create your first one</a></p>
                    </div>
                @endif
                @foreach ($projects as $project)
                    <div class="col-md-4">
                        <a class="card mb-2" style="text-decoration: none;color:inherit" href="/projects/{{$project->id}}">
                            <div class="card-body">
                                <h4 class="card-title">{{ $project->title }}</h4>
                                <p class="card-text text-truncate" style="color: grey">{{ $project->description }}</p>
                            </div>
                        </a>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</div>
@endsection
