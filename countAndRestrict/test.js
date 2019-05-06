const countAndRestrict = require(".");

describe(
	"Maximum count of one",
	() => {
		test.each(
			[
				null,
				[],
			],
		)(
			"Current of %j returns \"to watch\" as current and maximum not exceeded",
			currentIdentifiers => {
				const identifierToWatch = {};

				expect(
					countAndRestrict({
						currentIdentifiers,
						identifierToWatch,
						maximumCount: 1,
					}),
				)
				.toEqual(
					{
						currentIdentifiers: [ identifierToWatch ],
						isMaximumExceeded: false,
					},
				);
			},
		);

		test(
			"Current is \"to watch\" returns \"to watch\" as current and maximum not exceeded",
			() => {
				const identifierToWatch = {};

				const currentIdentifiers = [ identifierToWatch ];

				expect(
					countAndRestrict({
						currentIdentifiers,
						identifierToWatch,
						maximumCount: 1,
					}),
				)
				.toEqual(
					{
						currentIdentifiers,
						isMaximumExceeded: false,
					},
				);
			},
		);

		test(
			"Current is one other not equal to \"to watch\" returns current and maximum exceeded",
			() => {
				const currentIdentifiers = [ {} ];

				expect(
					countAndRestrict({
						currentIdentifiers,
						identifierToWatch: {},
						maximumCount: 1,
					}),
				)
				.toEqual(
					{
						currentIdentifiers,
						isMaximumExceeded: true,
					},
				);
			},
		);
	},
);

describe(
	"Maximum count of two",
	() => {
		test(
			"Current is one other not equal \"to watch\" returns current with \"to watch\" and maximum not exceeded",
			() => {
				const
					currentIdentifier = {},
					identifierToWatch = {};

				expect(
					countAndRestrict({
						currentIdentifiers: [ currentIdentifier ],
						identifierToWatch,
						maximumCount: 2,
					}),
				)
				.toEqual(
					{
						currentIdentifiers:
							[ currentIdentifier, identifierToWatch ],
						isMaximumExceeded:
							false,
					},
				);
			},
		);

		test(
			"Current is two others not equal \"to watch\" returns current and maximum exceeded",
			() => {
				const currentIdentifiers = [ {}, {} ];

				expect(
					countAndRestrict({
						currentIdentifiers,
						identifierToWatch: {},
						maximumCount: 2,
					}),
				)
				.toEqual(
					{
						currentIdentifiers,
						isMaximumExceeded: true,
					},
				);
			},
		);
	},
);