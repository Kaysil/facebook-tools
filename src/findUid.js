const request = require("request");
const cheerio = require("cheerio");

function findUid (url) {
	url = new URL(url);
	let next = false;

	// Validation URL
	switch (url.hostname) {
	case "www.facebook.com":
	case "facebook.com":
	case "m.facebook.com":
	case "mbasic.facebook.com":
	case "fb.com":
		next = true;
		break;
	default:
		next = false;
		break;
	}

	if (!next) throw new Error("Invalid URL!");

	const options = {
		url: "https://id.atpsoftware.vn",
		formData: {
			link: url,
			getid: "Tìm kiếm uid"
		}
	};

	/* eslint-disable no-unused-vars */
	request.post(options, function optionalCallback(err, response, body) {
		if (err) throw new Error(`ERR: Error when trying to post data`);

		let $ = cheerio.load(body);

		return $(".uid-result").text();
	});
	/* eslint-disable no-unused-vars */
}

module.exports = findUid;
