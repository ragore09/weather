# So... How's the weather?

This is an app for getting users's location and showing weather info using Google Maps API

## Installation (for Development environment)

### Pre-requisites
 - Yarn
 - Gradle
 - [OpenWeather API Key](http://openweathermap.org/api)

### Setup

- Once Yarn and Gradle are set up, `webpack` must be installed
```
yarn global add webpack
```
- To install project dependencies, inside project directory run
```
yarn install
```
- To generate `bundle.js` file, inside project directory run
```
webpack
```
- To compile java modifications, run
```
gradle build
```
### Run
1. Run `gradle bootRun -Dopenweather.appKey=yourAPIKey`

### How to use it
1. Enter http://localhost:8080/