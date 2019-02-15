module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "commonjs": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "prefer-template": "error",
        "semi": [
            "error",
            "always"
        ],
        "no-console": [
            "error",
            {
                "allow": [
                    "log"
                ]
            }
        ]
    }
};