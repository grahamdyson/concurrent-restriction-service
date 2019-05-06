"use strict";

const
	countInPersistanceAndGetIsMaximumExceeded = require("../countInPersistanceAndGetIsMaximumExceeded"),
	readIdentifiersFromEvent = require("./readIdentifiersFromEvent"),
	throwErrorWhenIdentifiersInvalid = require("./throwErrorWhenIdentifiersInvalid");

/** @type {import("aws-lambda").APIGatewayProxyHandler} */
module.exports.handle =
	async event => {
		const identifiers = readIdentifiersFromEvent(event);

		throwErrorWhenIdentifiersInvalid(
			identifiers,
		);

		return (
			{
				body:
					null,
				statusCode:
					getStatusCodeForIsMaximumExceeded(
						await countInPersistanceAndGetIsMaximumExceeded(
							identifiers,
						),
					),
			}
		);
	};

function getStatusCodeForIsMaximumExceeded(
	isMaximumExceeded,
) {
	return isMaximumExceeded ? 403 : 200;
}