# COMP424 Course Project
## Requirements
* PHP 7.2 or greater
* Laravel 5.7.0
* Composer
* PostgreSQL 9.6

## Setup
Clone the repo:
```
$ git clone git@github.com:timorthi/comp424-course-project.git && cd comp424-course-project
```

Install dependencies:
```
$ composer install
```

Copy `.env.example` to `.env` and then configure it to suit your environment (e.g. DB connections). Laravel will read this file and set up the app with these configs:
```
$ cp .env.example .env
```

After you're done setting up your `.env` file, run the development server:
```
$ php artisan serve
```

You should be able to access the app at `localhost:8000`.


