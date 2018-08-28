#! /usr/bin/env node
const commander = require('commander');
const { exec } = require('child_process');
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
	.option('-G, --git [Commit Message]', 'Commit and Push to Version Control')
	.option('-GC, --gitcommit [Commit Message]', 'Only Commit to Version Control')
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
			path +=
				options.dir.charAt(options.dir.length - 1) === '/'
					? options.dir
					: options.dir + '/';
			try {
				fs.mkdirSync(path);
			} catch (err) {
				if (err.code !== 'EEXIST') log(chalk.red(err));
			}
		}
		if (shortenedUrlTitle) {
			path += shortenedUrlTitle;
		} else {
			path += generatedPage;
		}

		const file = fs.createWriteStream(`${path}.html`);
		file.write(templatePage(url));
		log(
			chalk.blue(
				`Successfully created shortlink under ${path}.html pointing to ${url}`
			)
		);

		if (options.git) {
			const commitMessage =
				options.git === true
					? `Add ${url} shortlink via https://github.com/flxwu/shortlinker`
					: options.git;
			exec(`git add ${path}.html && git commit ${path}.html -m '${commitMessage}'`);
			if (!options.gitcommit) {
				exec(`git push`);				
			}
		}
	});

commander.parse(process.argv);
