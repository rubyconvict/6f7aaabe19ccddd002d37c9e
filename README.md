# Install
nvm install v4.2.1
echo 'nvm use 4.2.1' > ~/.nvmrc
npm install -g yo
npm install generator-react-webpack
npm install generator-react-webpack-alt
mkdir my-new-project && cd my-new-project
yo react-webpack-alt

# TODO 1:
port some stuff from https://github.com/rubyconvict/webpack-flightjs-demo/blob/master/webpack.config.js to this project, bit by bit, only if needed

# TODO 2:
# make components like here:
# https://github.com/arkency/react_flux_alt_immutable_todolist
npm install --save bootstrap
npm install --save react-bootstrap
npm install --save node-uuid
npm install --save immutable

# TODO 3:
# alt es6 + rails example
# https://github.com/tchret/hubum/tree/master/app/assets/javascripts

# Create a new component
yo react-webpack:component my_namespace/my_component

# Create a new store, as well as a dedicated action for it
yo react-webpack-alt:all my_namespace/my_function
# or separately
yo react-webpack-alt:action my_namespace/my_action
yo react-webpack-alt:store my_namespace/my_store

# create an empty source, see http://alt.js.org/docs/async/
yo react-webpack-alt:source my_namespace/my_source

# You will then be able to include it in your stores via
import MySource from 'my_namespace/my_source';
MySource.remoteAction();

# Start for development
npm start # or
npm run serve

# Watch the src directory for changes and run the tests
# npm install --save-dev watch
npm run test:ci

# Start the dev-server with the dist version
npm run serve:dist

# Just build the dist version and copy static files
npm run dist

# Run unit tests
npm test

# Lint all files in src (also automatically done AFTER tests are run)
npm run lint

# Clean up the dist directory
npm run clean

# Just copy the static assets
npm run copy
