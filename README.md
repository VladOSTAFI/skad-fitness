# Skad-fitness API

### Installation

```bash
$ npm install
```

### Before run the app

Create new file `.env` in project root directory and fill all required vars to run the app.

```bash
PORT - port to run application, default 3000
DB_URL - database url to connect
TOKEN_EXPIRATION_TIME - token expiration date, default 43200s
JWT_SECRET - secret phrase for jwt encryption
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```
