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

### CLI Options

###### Output Directory
Use `-D` to specify the directory in which the redirect-file will be put into: 
```
shortlinker https://github.com/flxwu/shortlinker GH-Link -D code/flxwu.github.io/links/
```
Given the website root is flxwu.github.io, I can now access the shortlink via flxwu.github.io/links/GH-Link.html.

###### Version Control
Use `-G` to enable automatic version control commit and push: 
```
shortlinker https://github.com/flxwu/shortlinker GH-Link -D code/flxwu.github.io/links/ -G
```
shortlinker now creates the same shortlink as above, but also commits the new file and pushes it to the remote repository.