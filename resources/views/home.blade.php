@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    @if (isset($user))
                        <p>Hi, {{ $user->name }}</p>
                        <p>Login count: {{ $user->logged_in_count }} </p>
                        <p>Last Login: {{ $user->last_logged_in }} </p>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
