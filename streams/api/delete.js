"use strict";

const
	readIdentifiersFromEvent = require("./readIdentifiersFromEvent"),
	removeFromPersistance = require("../removeFromPersistance"),
	throwErrorWhenIdentifiersInvalid = require("./throwErrorWhenIdentifiersInvalid");

/** @type {import("aws-lambda").APIGatewayProxyHandler} */
module.exports.handle =
	async event => {
		const identifiers = readIdentifiersFromEvent(event);

		throwErrorWhenIdentifiersInvalid(
			identifiers,
		);

		await removeFromPersistance(identifiers);

		return (
			{
				body: null,
				statusCode: 200,
			}
		);
	};