module.exports = {
    syntax: "postcss-scss",
    map: {inline: true},
    plugins: [
        // require("postcss-nested"),
        // require("postcss-import"),
        // require("postcss-advanced-variables"),
        require("autoprefixer"),
        require("cssnano")
    ]
}