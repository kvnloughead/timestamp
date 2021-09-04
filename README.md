# [Timestamp Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)

Built as part of FreeCodeCamp's backend curriculum. 

### Usage

- A request to
  ```
  https://stampthetime.herokuapp.com/api/:time
  ```

  for a valid date string `time` will return an object of the form

  ```
  { "unix": unix-time-stamp, "utc": utc-date-string }
  ```

- A request to

  ```
  https://stampthetime.herokuapp.com/api/
  ```

  will return an object of the same form with the current date.