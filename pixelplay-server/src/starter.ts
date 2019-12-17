export function generateStarter(
	width: number,
	height: number,
	offsetX: number,
	offsetY: number,
	seed: Array<Array<boolean>>
) {
	let base: any[] = [];

	const emptyRow = new Array(width).fill(false);

	for (let i = 0; i < offsetY; i++) {
		base.push(emptyRow);
	}

	// fill up array so positioning is correct
	seed
		.map(a => {
			return new Array(offsetX)
				.fill(false)
				.concat(a)
				.concat(new Array(width - a.length - offsetX).fill(false));
		})
		.forEach(row => {
			base.push(row);
		});

	const rowsToFill = height - base.length;

	for (let i = 0; i < rowsToFill; i++) {
		base.push(emptyRow);
	}

	return base.flat();
}
