module.exports =
	({
		currentIdentifier,
		identifierToWatch,
	}) => {
		return (
			whenNoCurrent()
			||
			asMaximumExceeded()
		);

		function whenNoCurrent() {
			return (
				!currentIdentifier
				&&
				{
					currentIdentifier: identifierToWatch,
					isMaximumExceeded: false,
				}
			);
		}

		function asMaximumExceeded() {
			return (
				{
					currentIdentifier,
					isMaximumExceeded: true,
				}
			);
		}
	};