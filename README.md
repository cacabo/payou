# PAYOU Web Application

Website for PAYOU: a service enabling employers to offer salary-deducted personal loans to their employees.

----------------------------------------

### Setting the environment

To run the app, you need an `env.sh` file in the root of the project directory which contains the following information:

```
export PORT="3000"
export MONGO_URI="mongodb://..."
export SENDGRID_API_KEY="..."
export EMAIL="..."
export SALT_ROUNDS="..."
```

These serve the following purposes:

* `PORT`: port which the express app runs on
* `MONGO_URI`: URI for the MongoDB database
* `SENDGRID_API_KEY`: used to send emails to users
* `EMAIL`: email address which contact forms submit emails to
* `SALT_ROUNDS`: used to generate salts for password encryption

----------------------------------------

### Running the app

First, clone this repository and ensure that your environment is set up correctly. In a terminal window, if you have `yarn` (preferred), run:

```
$ yarn
$ yarn dev
```

If you don't have `yarn`, run:

```
$ npm install
$ npm run dev
```

----------------------------------------

### Architecture

The web application is a Node.js app operating on a MongoDB database via Mongoose with an Express API server. Pages are written in React compiled on the server side with Next.js. Components are styled with `styled-components`.

File structure:

```
│
├─ components                   # Reusable and abstract React components and
│                               # styled-components components
│
├─ constants                    # Various JS objects for shared settings
│  ├─ colors.js                 # Colors used throughout the app
│  ├─ routes.js                 # Paths to various endpoints
│  ├─ text.js                   # Various messages used throughout the app
│  ├─ widths.js                 # Imports for screen responsiveness
│  └─ ...                       # Other files
│
├─ fragments                    # Generally single-use React components
│
├─ pages                        # Pages rendered via Next.js
│  ├─ _error.js                 # Next.js error handler page
│  └─ ...                       # Other files and folders
│
├─ scripts                      # Various node scripts to be used for
│                               # maintenance and some admin functions
│
├─ server                       # Backend operations
│  ├─ database                  # Wrapper on MongoDB database
│  │  ├─ models                 # Specifies database models
│  │  ├─ db.js                  # Aggregates database models
│  │  └─ mongooseConnect.js     # Handles connection to database
│  └─ routes                    # Route handlers
│
├─ static                       # Files served directly over the API
│  ├─ img                       # Images and icons
│  │  └─ ...             
│  ├─ favicon.ico
│  ├─ style.css                 # General css
│  └─ ...                       # Other partials
│
├─ store                        # Wrapper on top of LocalStore
│
├─ .babelrc                     # Frontend asset compilation config
├─ .eslintrc.js                 # Linter config
├─ .gitignore                   # Specifies which files to not include in git
├─ next.config.js               # Configures React compilation
├─ package.json                 # Node dependencies
├─ README.md                    # Documentation
├─ server.js                    # Entry point for the app
├─ env.sh                       # Specifies environment
└─ yarn.lock                    # Specifies how dependencies are installed
```

----------------------------------------

### Other notes

There is currently no integration with the other part of the app. Likely, that app will run at a different port (or subdomain) on the same EC2 (or similar) instance and will only accept connections from the same URL referrer. This will abstract away backend functionality and will make pivoting to more of a microservices architecture less difficult down the line.
