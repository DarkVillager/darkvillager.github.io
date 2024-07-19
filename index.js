async function SumbitData() {
	let it = 0;
	var all = [];
	let area = document.getElementById('in1');
	var lines = area.value
		.replace(/\r\n/g, '\n')
		.split('\n')
		.filter((line) => line);
	lines.forEach((element) => {
		element = element.replace(/!\[.*]\(/gm, '<img src="');
		element = element.replace(/\)/gm, '">');
		all.push(element);
	});
	area.value = all.toString().replace(',', '\n');
	await navigator.clipboard.writeText(area.value);

	area.value = area.value.replace(/,/gm, '');
}
