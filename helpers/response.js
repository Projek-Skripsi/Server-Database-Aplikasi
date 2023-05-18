exports.success = function (payload, message, res) {
	const data = {
		success: true,
		statusCode: res.statusCode,
		message,
		payload,
	};
	res.json(data);
	res.end();
};

exports.error = function (message, uri, statusCode, res) {
	const data = {
		success: false,
		statusCode: statusCode,
		error: {
			message,
			uri,
		},
	};
	res.json(data);
	res.end();
};
