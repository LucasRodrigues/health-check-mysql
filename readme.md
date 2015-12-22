# Health Check Mysql

Health check to system [mysql](https://www.mysql.com/)

## CI
[![Circle CI](https://circleci.com/gh/LucasRodrigues/health-check-mysql.svg?style=svg)](https://circleci.com/gh/LucasRodrigues/health-check-mysql)

## Install

```
$ npm install health-check-mysql
```

## Usage

```js
var healthCheckMysql = require('health-check-mysql');

healthCheckMysql.do([
  {
    server: 'validServer',
    user: 'validUser',
    password: 'validPassword'
  },
  {
      server: 'invalidServer',
      user: 'invalidUser',
      password: 'invalidPassword'
    }])
  .then(function(result) {
    console.log(result);
    /* 
    { health: false,
      success: 1,
      error: 1,
      details: 
       [ { name: 'validServer',
                    health: true,
                    message: '' }, 
        { name: 'invalidServer',
           health: false,
           message: 'getaddrinfo ENOTFOUND invalidServer invalidServer:3306' } 
       ] 
    }
    */
  })
  .catch(function(error) {
    console.log(error);
  });
```
