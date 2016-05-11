# PHP Package Boilerplate

A simple boilerplate for developing PHP packages which is mainly focused on automated TDD. 

## Getting Started

With [Composer](http://getcomposer.org/) and [Node.js](http://nodejs.org/) installed, run:

```
composer install
npm install
```

## Running the tests

```
gulp tdd
```

## Configuration for PHPStorm

### Prevent indexing of third-party packages

Exclude the following directories:
* /vendor
* /node_modules

More info: [Directories](https://www.jetbrains.com/help/phpstorm/2016.1/directories.html)

Set Include Paths to include the following paths:
* $PROJECT_ROOT$/vendor
* $PROJECT_ROOT$/vendor

More info: [Congifuring Include Paths](https://www.jetbrains.com/help/phpstorm/2016.1/configuring-include-paths.html)
