export const dateToHumanReadableDate = (date = new Date(), options) => {
	const locales = options && options.locales ? options.locales : 'en-US';
	const dayFormat =
		options && options.dayFormat ? options.dayFormat : 'numeric';
	const monthFormat =
		options && options.monthFormat ? options.monthFormat : 'long';
	const yearFormat =
		options && options.yearFormat ? options.yearFormat : 'numeric';
	options && console.log(options.dayFormat, dayFormat);

	// console.log(locales, dayFormat, monthFormat, yearFormat);

	return new Date(date).toLocaleDateString(locales, {
		day: dayFormat === 'none' ? undefined : dayFormat,
		month: monthFormat === 'none' ? undefined : monthFormat,
		year: yearFormat === 'none' ? undefined : yearFormat,
	});
};

/*
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(event.toLocaleDateString('de-DE', options));
// expected output: Donnerstag, 20. Dezember 2012

console.log(event.toLocaleDateString('ar-EG', options));
// expected output: الخميس، ٢٠ ديسمبر، ٢٠١٢

console.log(event.toLocaleDateString(undefined, options));
// expected output: Thursday, December 20, 2012 (varies according to default locale)
*/
