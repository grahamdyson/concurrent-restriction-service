"use strict";

/* istanbul ignore file: unit tests would be a mirror of implementation */

const createUserStreamsPersistance = require("./createUserStreamsPersistance");

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

		if (currentStreamIdentifiers) {
			const updatedStreamIdentifiers =
				currentStreamIdentifiers
				.filter(streamIdentifier => streamIdentifier !== identifiers.stream);

			if (currentStreamIdentifiers.length !== updatedStreamIdentifiers.length)
				await persist({
					streamIdentifiers:
						updatedStreamIdentifiers,
					userIdentifier:
						identifiers.user,
				});
		}
	};