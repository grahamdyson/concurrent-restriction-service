"use strict";

module.exports =
	({
		stream,
		user,
	}) =>
		throwErrorWhenAnyMessages(
			[
				...getMessageForStreamWhenError(stream),
				...getMessageForUserWhenError(user),
			],
		);

function * getMessageForStreamWhenError(
	stream,
) {
	if (!stream)
		yield "No video stream identifier specified in URI path.";
}

function * getMessageForUserWhenError(
	user,
) {
	if (!user)
		yield "No user identifier specified in request context.";
}

function throwErrorWhenAnyMessages(
	messages,
) {
	if (messages.length)
		throw Error(messages.join("\n"));
}