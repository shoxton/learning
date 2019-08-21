<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <style>
        .is-completed {
            text-decoration: line-through;
        }
    </style>
</head>
<body>

    <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="/">Home</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="/projects">Projects</a>
                </li>
            </ul>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <div class="form-inline ml-auto my-2 my-lg-0">
                    <a href="/projects/create">
                        <button type="text" class="btn btn-outline-primary my-2 my-sm-0">Create</button>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <div class="container" style="padding: 5% 0">
        @yield('content')
    </div>
</body>
</html>