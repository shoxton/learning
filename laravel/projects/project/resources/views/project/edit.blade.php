@extends('layout')

@section('content')

    <h1 class="title">Edit</h1>

    <form action="/projects/{{$project->id}}" method="POST">

        @method('PATCH')
        @csrf

        <div class="form-group">
          <label for=""></label>
        <input type="text" value="{{$project->title}}" class="form-control" name="title" id="" aria-describedby="helpId" placeholder="Title">
        </div>
        <div class="form-group">
          <label for=""></label>
          <textarea placeholder="Description" class="form-control" name="description" id="" rows="3">{{$project->description}}</textarea>
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
    </form>
    <form action="/projects/{{$project->id}}" method="POST">
        
        @method('DELETE')
        @csrf

        <button style="float:right" type="submit" class="btn btn-danger">Delete</button>

    </form>

@endsection
