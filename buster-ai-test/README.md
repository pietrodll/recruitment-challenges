# BusterAI project

## Description

This is the project I made for the recruitment process of BusterAI.
It is an API build in Express (NodeJS) with an authentication system that allow users with enough credits to compute numbers of the Fibonacci sequence based on their index.
There is also a frontend built in React: after logging in or signing up, users can see how many credits they have left and use them to compute elements of the Fibonacci sequence.
Both the API and the frontend use Typescript for type checking.
The API works with a PostgreSQL database.

## How to run locally

The whole project can be easily run with `docker-compose`: if you have `docker` and `docker-compose` installed on your machine, you only need to add the `.env` files in order to launch the API, the frontend and the database.

There are 3 `.env` files to create: one at the root of the project (for the backend), one in the `db` folder and one in the `frontend` folder.
The `.env.example` files show the names of the environment variables to define.
Some variables are overridden in the `docker-compose` because a specific value is necessary to make the containers work together: `DB_HOST` and `PORT` for the API, `REACT_APP_API_URL` for the frontend.

There are two `docker-compose` files: one for the development environment, and the other for the production environment.
In the production environment, the frontend is built and served statically with the express API.
For the development mode, the `.env` files are `.env.development`, whereas for the production mode, they are `.env.production`.
