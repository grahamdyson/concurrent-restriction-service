"use strict";

module.exports =
	(/** @type import("aws-lambda").APIGatewayProxyEvent */{
		requestContext,
		pathParameters,
	}) => (
		{
			stream: pathParameters.identifier,
			user: requestContext.identity.user,
		}
	);