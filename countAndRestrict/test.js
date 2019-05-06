const countAndRestrict = require(".");

test(
	"Current identifier of null returns identifier to watch as current and maximum not exceeded",
	() => {
		const identifierToWatch = {};

		expect(
			countAndRestrict({
				currentIdentifier: null,
				identifierToWatch,
			}),
		)
		.toEqual(
			{
				currentIdentifier: identifierToWatch,
				isMaximumExceeded: false,
			},
		);
	},
);

test(
	"Current identifier of value returns current and maximum exceeded",
	() => {
		const currentIdentifier = {};

		expect(
			countAndRestrict({
				currentIdentifier,
				identifierToWatch: {},
			}),
		)
		.toEqual(
			{
				currentIdentifier,
				isMaximumExceeded: true,
			},
		);
	},
);