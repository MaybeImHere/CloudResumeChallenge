let count = 0;

module.exports = async function (context, req) {
	count += 1;

	context.res = {
		headers: {
			"Content-Type": "application/json",
			"Cache-Control": "no-store",
			"Access-Control-Allow-Origin": "*"
		},
		body: { count }
	};
};
