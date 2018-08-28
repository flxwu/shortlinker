const templatePage = url => {
	return `<html><meta http-equiv="refresh" content="0; URL=${url}"/><body><h1>You will be redirected shortly. If not, click here: ${url}</h1></body></html>`;
};

module.exports = templatePage;
