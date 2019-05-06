"use strict";

/* istanbul ignore file: does not currently contain any behaviour */

/** @type {import("aws-lambda").APIGatewayProxyHandler} */
module.exports.handle =
	() =>
		Promise.resolve({
			body: null,
			statusCode: 200,
		});