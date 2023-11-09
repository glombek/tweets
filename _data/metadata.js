let data = {
	username: "JoeGlombek", // No leading @ here
	homeLabel: "Joe's website",
	homeUrl: "https://joe.gl/ombek",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;