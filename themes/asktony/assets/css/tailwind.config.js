const themeDir = __dirname + '/../../';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        `${themeDir}/layouts/**/*.html`,
        `${themeDir}/content/**/*.md`
    ],
}