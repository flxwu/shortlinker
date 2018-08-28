#! /usr/bin/env node
const commander = require('commander');
const chalk = require('chalk');
const fs = require('fs');
const templatePage = require('./template');

const log = console.log;
const urlRegex = new RegExp(
	/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
);

commander
	.arguments('<url> [shortenedUrlTitle]')
	.description('How to use: shortlinker https://longUrl.com shortUrl')
	.option(
		'-D, --dir <directoryPath>',
		'website directory to create the shortlink in'
	)
	.action((url, shortenedUrlTitle, options) => {
		const isValidUrl = urlRegex.test(url);
		if (!isValidUrl) {
			log(chalk.red('Please specify a valid URL'));
			return;
		}

		const generatedPage = Math.random()
			.toString(36)
			.substring(7);

		let path = '';
		if (options.dir) {
			path += options.dir;
		}
		if (shortenedUrlTitle) {
			path += shortenedUrlTitle;
		} else {
			path += generatedPage;
		}

		const file = fs.createWriteStream(`${path}.html`);
		file.write(
			templatePage(url)
		);
	});

commander.parse(process.argv);
