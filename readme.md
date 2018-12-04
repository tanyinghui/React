## Get Started

### 1. Prerequisites

- [NodeJs](https://nodejs.org/en/)
- [NPM](https://npmjs.org/) - Node package manager

### 2. Installation

On the command prompt run the following commands:

``` 
 $ cp .env.example .env (edit it with your secret key and database information)
 $ npm install
 $ npm run migrate
 ```
 Finally, start and build the application:
 
 ```
 $ npm run build (For development)
```

List of NPM Commands:
 
  ```
  $ npm run lint       # linting
  $ npm run clean      # remove dist and node_modules folder and install dependencies
 ```

### 3. Usage

URL : http://localhost:3000/

Navigate to http://localhost:3000/swagger for the API documentation.
