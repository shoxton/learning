@extends('layout')

@section('content')

    <h1>Projects</h1>

    <div class="card-deck">
        @foreach ($projects as $project)
            <a href="/projects/{{$project->id}}">
                <div class="card" style="margin: 10px">
                    <div class="card-body">
                        <h4 class="card-title">{{ $project->title }}</a></h4>
                        <p class="card-text">{{ $project->description }}</a></p>
                    </div>
                </div>
            </a>
        @endforeach
    </div>

@endsection
