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
1 - Send a post request to the following route using some API platform (Postman ) 
```bash
$ http://localhost:3000/currencyData
```
2 - response exemple
```bash
$ [
    {
        "currency": "BTC",
        "price": {
            "usd": "18768.34",
            "gbp": "16345.56"
        },
        "highHour": {
            "usd": "18769.89",
            "gbp": "16349.1"
        },
        "lowHour": {
            "usd": "18712.12",
            "gbp": "16311.13"
        },
        "openHour": {
            "usd": "18769.89",
            "gbp": "16349.1"
        },
        "closeHour": {
            "usd": "18768.34",
            "gbp": "16345.56"
        }
    },
    {
        "currency": "ETH",
        "price": {
            "gbp": "1320.01",
            "usd": "1516.68"
        },
        "highHour": {
            "gbp": "1320.69",
            "usd": "1516.76"
        },
        "lowHour": {
            "gbp": "1315.29",
            "usd": "1507.7"
        },
        "openHour": {
            "gbp": "1320.69",
            "usd": "1516.76"
        },
        "closeHour": {
            "gbp": "1320.01",
            "usd": "1516.68"
        }
    },
    {
        "currency": "BSC",
        "price": {
            "usd": "0.00185005"
        },
        "highHour": {
            "usd": "0.00185005"
        },
        "lowHour": {
            "usd": "0.00185"
        },
        "openHour": {
            "usd": "0.00185005"
        },
        "closeHour": {
            "usd": "0.00185005"
        }
    }
]
```
## Stay in touch

- Author - mouhcinehouiri@gmail.com
