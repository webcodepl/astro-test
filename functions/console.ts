exports.handler = async (event, context) => {
	const subject = event.queryStringParameters.name || "World";

	const test: string = "test";

	return {
		statusCode: 200,
		body: JSON.stringify(context),
	};
};
