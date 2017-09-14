# Simple Server
This is a simple server with an /exampleService route that can serve as a stub for any simple app that could benefit from a running node server.  

## Setup
> npm install

## Run
> npm start

## Use
Once your server is running, from your request client of choice (browser, Postman, curl, etc.) try to make a request to:
> localhost:8989/
or
> localhost:8989/exampleService

Or use a curl request to POST
> curl -X POST "http://localhost:8989" -H "accept: application/json" -H "content-type: application/json" -d "{\"name\": \"Jane Doe\", \"age\": 27, \"pets\": [{\"name\": \"Dusty\", \"taxonomy\": \"Lagomorpha\", \"diet\": [\"hay\", \"pellets\"]}]}"
