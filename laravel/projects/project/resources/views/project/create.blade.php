@extends('layout')

@section('content')

    <h1 class="title">Create</h1>

    <form action="/projects" method="POST">

        @csrf

        <div class="form-group">
          <input value="{{old('title')}}" type="text" class="form-control {{ $errors->has('title') ? 'is-invalid' : '' }}" name="title" id="" aria-describedby="helpId" placeholder="Title">
        </div>
        <div class="form-group">
          <textarea placeholder="Description" class="form-control {{ $errors->has('description') ? 'is-invalid' : '' }}" name="description" id="" rows="3">{{old('description')}}</textarea>
        </div>
        <button type="submit" class="btn btn-primary">Create</button>

    </form>

    @if($errors->any())
      <ul class="alert alert-danger mt-3" role="alert">
        
        @foreach ($errors->all() as $error)
          <li class="ml-3">{{$error}}</li>
        @endforeach

      </ul>
    @endif

@endsection