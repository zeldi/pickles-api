## Init a project

```bash
$ yarn init
$ npx typescript --init
```

## Add dependencies
```bash
$ yarn add express yup config cors express pino pino-pretty dayjs dotenv 

$ yarn add nodemailer && yarn add -D @types/nodemailer

```
## Running Application
You should now be able to run the application with hot reloading like so:
1. Using yarn
    ```bash
    $ yarn dev
    ```
2. Using Docker


## Calling REST API

```bash
curl --location --request POST 'localhost:9090/hello' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "123",
    "name": "zeldi",
    "email": "zeldi.syd@outlook.com"
}'
```

## Unit Test

### Dependecies

1. To test the REST API, we use `mocha` and `chai` modules.
2. To install dependencies for unit test, run the following command:
    ```bash
    $ yarn add chai chai-http mocha @types/chai @types/chai-http @types/mocha --save-dev
    ```
3. Test scripts are stored inside `/test` folder.

### Running Unit Test
1. Execute unit test with the following command:
    ```bash
    $ yarn test
    ..
    Testing GET (/) endpoint
        ✔ should return 'Welcome to Pickle API' on call

    Testing POST /api/data endpoint
        ✔ should return 'Data has been received' on call (1438ms)

    2 passing (1s)
    ``` 

## Email Service
- 
- sendinblue.com