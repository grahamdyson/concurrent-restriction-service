"use strict";

const
	readIdentifiersFromEvent = require("./readIdentifiersFromEvent"),
	throwErrorWhenIdentifiersInvalid = require("./throwErrorWhenIdentifiersInvalid");

/** @type {import("aws-lambda").APIGatewayProxyHandler} */
module.exports.handle =
	event => {
		const identifiers = readIdentifiersFromEvent(event);

		throwErrorWhenIdentifiersInvalid(
			identifiers,
		);

		return (
			Promise.resolve({
				body: null,
				statusCode: 200,
			})
		);
	};