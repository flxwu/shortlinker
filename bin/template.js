const templatePage = url => {
	return `<html><meta http-equiv="refresh" content="0; URL=${url}"/><body><h3>You will be redirected shortly. If not, click <a href="${url}">here</a>:</h3></body></html>`;
};

module.exports = templatePage;
