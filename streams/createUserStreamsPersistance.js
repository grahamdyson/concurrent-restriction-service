
"use strict";

/* istanbul ignore file: implementation specific to AWS DynamoDB DocumentClient which would be required to run during unit tests */

const { DynamoDB: { DocumentClient } } = require("aws-sdk");

module.exports =
	() => {
		const documentClient = new DocumentClient();

		return {
			persist,
			retrieveStreamIdentifiersForUserIdentifier,
		};

		async function persist({
			streamIdentifiers,
			userIdentifier,
		}) {
			await documentClient.put({
				Item:
					{
						streamIdentifiers,
						userIdentifier,
					},
				TableName,
			})
			.promise();
		}

		async function retrieveStreamIdentifiersForUserIdentifier(
			userIdentifier,
		) {
			const { Item } =
				await documentClient.get({
					Key: { userIdentifier },
					TableName,
				})
				.promise();

			return Item && Item.streamIdentifiers;
		}
	};

const TableName = "userStreams";