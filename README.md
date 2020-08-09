# Edgistify-Portal

### Prerequisites

* node
* npm
* mongodb

1. Clone this repository

2. Install server dependencies
    ```bash
    $ cd server
    $ npm install
    ```
3. Install client dependencies
    ```bash
    $ cd client
    $ npm install
    ```
 *PS: If the logout function is not working, please downgrade your react-router-dom to version 4.3.1*

## Run the app

1. Start mongodb locally
    ```bash
    $ mongod
    ```
2. Start the server
    ```bash
    $ cd server
    $ npm start
    ```
3. Start the client
    ```bash
    $ cd client
    $ yarn start
    ```
4. Browse to `http://localhost:3000/`

### Front End

- [x] [React](https://reactjs.org/) SPA using [React Router](https://reacttraining.com/react-router/web/)
- [x] [Redux](https://redux.js.org/) w/ [Thunk](https://github.com/reduxjs/redux-thunk) for state management
- [x] Use material-ui for create template (https://material-ui.com) 
- [x] [axios](https://github.com/axios/axios) for API calls with [JWT](https://jwt.io/) Authentication


### Back End

- [x] Data persistence with MongoDB w/ [mongoose](https://mongoosejs.com/) ORM
- [x] REST API made with [Node](https://nodejs.org/) and [Express](https://expressjs.com/)
- [x] Authentication with [passport.js](http://passportjs.org)
