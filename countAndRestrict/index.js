"use strict";

module.exports =
	(/** @type {import("./Parameter.d")} */{
		currentIdentifiers,
		identifierToWatch,
		maximumCount,
	}) => {
		return (
			whenNoCurrent()
			||
			whenToWatchIsInCurrent()
			||
			whenMaximumNotExceeded()
			||
			asMaximumExceeded()
		);

		function whenNoCurrent() {
			return (
				hasNoCurrent()
				&&
				{
					currentIdentifiers: [ identifierToWatch ],
					isMaximumExceeded: false,
				}
			);

			function hasNoCurrent() {
				return (
					!currentIdentifiers
					||
					!currentIdentifiers.length
				);
			}
		}

		function whenToWatchIsInCurrent() {
			return (
				currentIdentifiers.includes(identifierToWatch)
				&&
				{
					currentIdentifiers,
					isMaximumExceeded: false,
				}
			);
		}

		function whenMaximumNotExceeded() {
			return (
				currentIdentifiers.length < maximumCount
				&&
				{
					currentIdentifiers:
						[
							...currentIdentifiers,
							identifierToWatch,
						],
					isMaximumExceeded:
						false,
				}
			);
		}

		function asMaximumExceeded() {
			return (
				{
					currentIdentifiers,
					isMaximumExceeded: true,
				}
			);
		}
	};