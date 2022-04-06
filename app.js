import fetch from 'node-fetch';

console.log('Sending task');

const response = await fetch('https://www.tasker.sh/api/queues/default/tasks', {
	method: 'post',
	headers: {
		'authorization': process.env.TOKEN,
		'content-type': 'application/json'
	},
	body: JSON.stringify({
		task_type: "dispatch",
		command: "node index.js",
		source: process.env.SOURCE
	}),
});

console.log(await response.text());
