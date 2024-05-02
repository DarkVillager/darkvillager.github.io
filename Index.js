const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(() => console.log(`Server is listening on port 3000`));
app.use('/', router);

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
		// if ((lines.indexOf(element) - 3) % 4 == 0) {
		//   let i = 0;
		//   var pt = { date: element };
		//   dates.push(pt);
		//   i++;
		//   console.log(dates);
		// } else if ((lines.indexOf(element) - 2) % 4 == 0) {
		//   console.log(`TE: ${element} (${it})`);
		//   it++;
		//   var pt2 = { time: element };
		//   times.push(pt2);
		//   console.log(times);
		// } else if (lines.indexOf(element) % 4 == 0) {
		//   let i = 0;
		//   var pt3 = { activities: element };
		//   activities.push(pt3);
		//   i++;
		//   console.log(activities);
		// } else if ((lines.indexOf(element) - 1) % 4 == 0) {
		//   let i = 0;
		//   var pt4 = { location: element };
		//   location.push(pt4);
		//   i++;
		//   console.log(location);
		// } else {
		//   console.log(`${element} nee`);
		// }
	});
	area.value = all.toString().replace(',', '\n');
	await navigator.clipboard.writeText(area.value);

	area.value = area.value.replace(/,/gm, '');
	// console.log(all);
	// var both = new Object({
	// 	dates: [],
	// 	times: [],
	// 	activities: [],
	// 	location: [],
	// });
	// for (var i = 0; i < activities.length; i++) {
	// 	console.log(times[i]);
	// 	both.dates.push({
	// 		dates: dates[i],
	// 		times: times[i],
	// 		activities: activities[i],
	// 		location: location[i],
	// 	});
	// }
	// const sortedDates = both.dates.sort(function (a, b) {
	// 	if (a.dates.date === b.dates.date) {
	// 		console.log('Dates Same');
	// 		if (b.times.time === a.times.time) {
	// 			console.log('Time Same');
	// 		} else {
	// 			if (
	// 				new Date(b.times.time).valueOf() < new Date(a.times.time).valueOf()
	// 			) {
	// 				if (
	// 					new Date(b.times.time).valueOf() > new Date(a.times.time).valueOf()
	// 				) {
	// 					return 1;
	// 				} else {
	// 					return -1;
	// 				}
	// 			}
	// 		}
	// 	} else {
	// 		console.log('nope');
	// 		return new Date(b.dates.date).valueOf() > new Date(a.dates.date).valueOf()
	// 			? -1
	// 			: 1;
	// 	}
	// });
	// console.log('Sorted Date:');
	// console.log(sortedDates);
}
