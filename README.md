# ITSM

### Tech

Project is composed using [create-react-app] plugin.
The starter already based on webpack + babel (internally)

Project uses a number of plugins to work properly:

* [Redux] - State management library 
* [React-Redux] - Redux to React connector
* [React-Thunk] - Asynchornous state management library
* [React-Bootstrap] - UI boilerplate for react web apps
* [React Router] - Core react app routing capabilities

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd itsm
$ npm install -d
$ npm run
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production npm run
```

#### Building for source
For production release:
```sh
$ npm run build
```
### Code guide

Please read following code guide for understaing basic react code guide concepts: 
<https://github.com/airbnb/javascript/blob/master/react/README.md>

### Docker
To run docker container for development:

```sh
$ docker-compose up
```

Rebuild:

```sh
$ docker-compose up --build
```

Codebase is mounted as volume and supports autoreload on codechanges.

### Information For Developers (Highly Recommended):

Please read following resource before proceeding to development for better understanding of core React concepts:

React philosophy:

<https://reactjs.org/docs/thinking-in-react.html>

Container vs Presentation components concept, written by React author:

<https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0>

Basics of redux integration into react application:

<https://redux.js.org/docs/basics/UsageWithReact.html>

Javascript fetch library will be used to perform requests to api:

<https://davidwalsh.name/fetch>

Prop-Types plugin often used to define restrictions on React component props:

<https://reactjs.org/docs/typechecking-with-proptypes.html>

##### Code improvements:

Basics on reducers and core concepts on implementation:


<https://redux.js.org/docs/basics/Reducers.html>


NOTE: Reducer dooes not mutate state
Use Object.assign({}, state, {}); or object spread operator
Don't forget to return default state for any unknown action


<https://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html>

Destructuring assignments:


<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment>

### Todos
 - JWT Authentication
 - Generic request library

[//]: #
   [create-react-app]: <https://github.com/facebookincubator/create-react-app>
   [redux]: <https://redux.js.org/>
   [react-redux]: <http://daringfireball.net>
   [react-thunk]: <http://daringfireball.net/projects/markdown/>
   [react-bootstrap]: <https://react-bootstrap.github.io/getting-started.html>
   [react router]: <https://reacttraining.com/react-router/web/guides/philosophy>