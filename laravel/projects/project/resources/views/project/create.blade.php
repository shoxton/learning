@extends('layouts.app')

@section('content')

<div class="container">
  <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card">
              <div class="card-header"><h1 class="title">Create</h1></div>

              <div class="card-body">

                  <form action="/projects" method="POST">

                      @csrf
              
                      <div class="form-group">
                        <input required value="{{old('title')}}" type="text" class="form-control {{ $errors->has('title') ? 'is-invalid' : '' }}" name="title" id="" aria-describedby="helpId" placeholder="Title">
                        @error('title')
                          <div class="invalid-feedback">
                              {{ $message }}
                          </div>
                        @enderror
                      </div>
                      <div class="form-group">
                        <textarea required placeholder="Description" class="form-control {{ $errors->has('description') ? 'is-invalid' : '' }}" name="description" id="" rows="3">{{old('description')}}</textarea>
                        @error('description')
                          <div class="invalid-feedback">
                              {{ $message }}
                          </div>
                        @enderror
                      </div>
                      <button type="submit" class="btn btn-primary">Create</button>
            
                  </form>
                  
              </div>
          </div>
      </div>
  </div>
</div>



@endsection