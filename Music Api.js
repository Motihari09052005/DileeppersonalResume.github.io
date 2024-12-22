const url = 'https://spotify23.p.rapidapi.com/search/?type=multi&offset=0&limit=10&numberOfTopResults=5';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0ec5210e3dmshb1519df0bdf3ad2p17c2cajsn613ee6554d7c',
		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


   