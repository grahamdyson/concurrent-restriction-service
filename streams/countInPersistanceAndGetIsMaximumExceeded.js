"use strict";

/* istanbul ignore file: unit tests would be a mirror of implementation */

const
	countAndRestrict = require("./countAndRestrict"),
	createUserStreamsPersistance = require("./createUserStreamsPersistance");

module.exports =
	/** @param {{stream, user}} identifiers */
	async identifiers => {
		const
			{
				persist,
				retrieveStreamIdentifiersForUserIdentifier,
			} = createUserStreamsPersistance();

		const currentStreamIdentifiers =
			await retrieveStreamIdentifiersForUserIdentifier(
				identifiers.user,
			);

		const
			{
				currentIdentifiers: updatedStreamIdentifiers,
				isMaximumExceeded,
			}
			=
			countAndRestrict({
				currentIdentifiers:
					currentStreamIdentifiers,
				identifierToWatch:
					identifiers.stream,
				maximumCount:
					3,
			});

		if (currentStreamIdentifiers !== updatedStreamIdentifiers)
			await persist({
				streamIdentifiers:
					updatedStreamIdentifiers,
				userIdentifier:
					identifiers.user,
			});

		return isMaximumExceeded;
	};