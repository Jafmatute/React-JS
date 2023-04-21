# configurations
=> jest.config.cjs add configurations

module.exports = {
testEnvironment:'jest-environment-jsdom',
setupFiles: ['./jest.setup.js']
}

=> jest.setup.js add configurations

import 'whatwg-fetch';

=> install package yarn add -D whatwg-fetch

=> install package yarn add --dev @testing-library/react

=> install package yarn add -D jest-environment-jsdom

=> install package yarn add -D @babel/preset-react

=> edit file babel.config.cjs 

module.exports = {
presets: [
['@babel/preset-env', {targets: {esmodules:true}}],
['@babel/preset-react', {runtime: 'automatic'}]
],
};


