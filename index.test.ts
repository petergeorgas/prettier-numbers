import { prettyNumber } from "./index";

test("Throws a TypeError when Infinity is supplied.", () => {
	expect(() => {
		prettyNumber(1 / 0);
	}).toThrowError(TypeError);
});

test("Throws a TypeError when an unsafe number is supplied.", () => {
	expect(() => {
		prettyNumber(Math.pow(2, 53));
	}).toThrowError(TypeError);
});

test('Converts 1341 to "1,341", with no options specified.', () => {
	expect(prettyNumber(1341)).toBe("1,341");
});

test('Converts 1341 to "1.3K", with only abbreviate_suffix options specified.', () => {
	expect(prettyNumber(1341, { abbreviate_suffix: true })).toBe("1.3K");
});

test('Converts 1341 to "1.34K", with abbreviate_suffix and decimal_places options specified.', () => {
	expect(
		prettyNumber(1341, { abbreviate_suffix: true, decimal_places: 2 })
	).toBe("1.34K");
});

test('Converts 100341 to "100,341", with no options specified.', () => {
	expect(prettyNumber(100341)).toBe("100,341");
});

test('Converts 1004341 to "1,004,341", with no options specified.', () => {
	expect(prettyNumber(1004341)).toBe("1,004,341");
});

test('Converts 1004341 to "1.0M", with abbreviate_suffix option specified.', () => {
	expect(prettyNumber(1004341, { abbreviate_suffix: true })).toBe("1.0M");
});

test('Converts 1004341 to "1.00434M", with abbreviate_suffix and decimal_places options specified.', () => {
	expect(
		prettyNumber(1004341, { abbreviate_suffix: true, decimal_places: 5 })
	).toBe("1.00434M");
});

test('Converts 3434567946 to "3,434,567,946", with no options specified.', () => {
	expect(prettyNumber(3434567946)).toBe("3,434,567,946");
});

test('Converts 3434567946 to "3.4B", with abbreviate_suffix option specified.', () => {
	expect(prettyNumber(3434567946, { abbreviate_suffix: true })).toBe("3.4B");
});

test('Converts 3434567946 to "3.43457B", with abbreviate_suffix and decimal_places options specified.', () => {
	expect(
		prettyNumber(3434567946, { abbreviate_suffix: true, decimal_places: 5 })
	).toBe("3.43457B");
});

test('Converts 134 to "134", with abbreviate_suffix and decimal_places options specified.', () => {
	expect(
		prettyNumber(134, { abbreviate_suffix: true, decimal_places: 5 })
	).toBe("134");
});

test('Converts 134 to "134", with abbreviate_suffix option specified.', () => {
	expect(prettyNumber(134, { abbreviate_suffix: true })).toBe("134");
});

test('Converts 134 to "134", with no options specified.', () => {
	expect(prettyNumber(134, { abbreviate_suffix: true })).toBe("134");
});
