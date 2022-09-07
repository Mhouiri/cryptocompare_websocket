<p align="center">
  <a href="https://ihcuae.com/" target="blank"><img src="https://logo.clearbit.com/ihcuae.com/" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A websocket connection with an express app in order to update data into database in realtime </p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/badge/npm-v8.19.1-blue" alt="NPM Version" /></a>
 /></a>
</p>

## Description

This project is based on a technical test 
[requirments](https://github.com/Mhouiri/cryptocompare_websocket/blob/main/docs/SoftwareEngineerTest.pdf) for a Software Engineer position at IHC. 

## Prerequisite

```bash
1 - Express
2 - Git
```

## Installation for development

1 - Clone the project repository
```bash
$ https://github.com/Mhouiri/cryptocompare_websocket
```

2 - Copy and fill the environement variables 
```bash
$ cp .env-example .env
```

3 - Register and create an ApiKey to connect the app with CryptoCompare websocket
```bash
$ https://www.cryptocompare.com/cryptopian/api-keys
```

## Running the app

1 - Start the server
```bash
$ nodemon server.js
```

## Using the API
You can access the API on port 3000 <br/>
To send an email you need postman or curl (any other tool)<br/>
