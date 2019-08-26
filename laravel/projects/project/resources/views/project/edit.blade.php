@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"><h1 class="title">Edit</h1></div>

                <div class="card-body">
                  
                  <form action="/projects/{{$project->id}}" method="POST">

                      @method('PATCH')
                      @csrf
              
                      <div class="form-group">
                        <input required type="text" value="{{$project->title}}" class="form-control {{ $errors->has('title') ? 'is-invalid' : '' }} " name="title" aria-describedby="helpId" placeholder="Title">
                        
                        @error('title')
                          <div class="invalid-feedback">
                              {{ $message }}
                          </div>
                        @enderror

                      </div>

                      <div class="form-group">
                        <textarea required placeholder="Description" class="form-control {{ $errors->has('description') ? 'is-invalid' : '' }} " name="description" rows="3">{{$project->description}}</textarea>
                      
                        @error('description')
                          <div class="invalid-feedback">
                              {{ $message }}
                          </div>
                        @enderror

                      </div>

                      <div class="d-flex justify-content-between align-items-center">
                        <a href="/projects"><button type="button" class="btn btn-default">Cancel</button></a>
                        <div>
                          <button type="button" class="btn btn-danger" onclick="
                                event.preventDefault();
                                document.getElementById('delete-project-form').submit();"
                              >
                              Delete
                          </button>
                          <button type="submit" class="btn btn-primary">Update</button>
                        </div>
                      </div>
                  </form>

                  <form id="delete-project-form" action="/projects/{{$project->id}}" method="POST">
                        
                    @method('DELETE')
                    @csrf

                </form>

                </div>
            </div>
        </div>
    </div>
</div>



@endsection
