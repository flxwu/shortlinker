# shortlinker

A Simple Node.js CLI Utility to create redirecting shortlinks on your own website.

## Usage

Install using `npm` or `yarn`: 
```bash
npm install -g shortlinker 
yarn global add shortlinker
```

Then run it:
```
shortlinker https://github.com/flxwu/shortlinker GH-Link
```
will create a `GH-Link.html` file in your current directory that redirects to https://github.com/flxwu/shortlinker.

#### CLI Options
Use `-d` to specify the directory in which the redirect-file will be put into: 
```
shortlinker https://github.com/flxwu/shortlinker GH-Link -d code/flxwu.github.io/links/
```
Given the website root is flxwu.github.io, I can now access the shortlink via flxwu.github.io/links/GH-Link.html.