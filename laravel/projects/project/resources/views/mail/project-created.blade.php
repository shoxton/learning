@component('mail::message')
# New project created - {{ $project->title }}

The body of your message.

@component('mail::button', ['url' => url('/projects/' . $project->id)])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
