# Rob Waller Blog and Profile Website

Provides blog posts on software development by Rob Waller. Along with CV and Profile information.

Site is powered by Jekyll and is hosted on GitHub Pages.

[robdwaller.github.io](http://robdwaller.github.io)

## Setup

To create a development environment for this site use the following docker-compose.yml and Dockerfile. This will spin up a Ruby environment with Jekyll.

docker-compose.yml:
```yml
version: "3"

services:
    ruby:
      build:
        context: .
        dockerfile: Dockerfile
      volumes:
          - .:/var/www/html
      working_dir: /var/www/html
      tty: true
      ports:
          - "8080:80"
```

Dockerfile:
```
FROM ruby:2.7

RUN apt-get update && apt-get install -y ruby-full build-essential zlib1g-dev

RUN gem install jekyll bundler
```

## Usage

To spin up the Docker environment use the following command.

```bash
docker compose up -d
```

Shell into the docker environment.

```bash
docker compose exec ruby bash
```

Build Jekyll and start a server:

```bash
jekyll serve --host 0.0.0.0 --port 80
```

Navigate to [localhost:8080](http://localhost:8080/) and view the site.

To see future posts which are yet to be published run the following command:

```bash
jekyll serve --host 0.0.0.0 --port 80 --future
```

To see posts which have published state of `false` run the following command:

```bash
jekyll serve --host 0.0.0.0 --port 80 --unpublished
```

## License

MIT

For site content please ask permission of author. Contact details below.

## Author

[@RobDWaller](https://twitter.com/RobDWaller)

rdwaller1984@googlemail.com
