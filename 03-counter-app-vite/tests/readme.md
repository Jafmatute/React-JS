# Install dependences
-- yarn add --dev jest

-- yarn add -D @types/jest

-- yarn add --dev babel-jest @babel/core @babel/preset-env

-- create file babel.config.cjs and add the configuration next:
module.exports = {
presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

