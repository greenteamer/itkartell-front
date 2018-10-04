module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
        "no-unused-vars": 0,
        "max-len": [1, 120, 2, { ignoreComments: true }],
        "prop-types": [2]
    }
};