const request = require("request");
const cheerio = require("cheerio");

function findUid (url, callback) {
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

	if (!next) return callback(new Error("Invalid URL!"));
	if (url.protocol !== "https:" && url.protocol !== "http:") return callback(new Error("Invalid protocol"));
	if (url.protocol !== "http:" && url.protocol !== "https:") return callback(new Error("Invalid protocol"));

	const options = {
		url: "https://id.atpsoftware.vn",
		formData: {
			link: url.toString(),
			getid: "Tìm kiếm uid"
		}
	};

	/* eslint-disable no-unused-vars */
	request.post(options, function (err, response, body) {
		if (err) callback(new Error(`ERR: Error when trying to post data`));

		let $ = cheerio.load(body);

		callback(null, $(".uid-result").text());
	});
	/* eslint-disable no-unused-vars */
}

module.exports = findUid;

findUid("https://www.facebook.com/kaysil.666", console.log);