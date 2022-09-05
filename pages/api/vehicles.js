// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	res.status(200).json({
		count: 39,
		next: "https://diversunivers.com/api/vehicles/?page=2",
		previous: null,
		results: [
			{
				name: "Sand Crawler",
				model: "Digger Crawler",
				manufacturer: "Corellia Mining Corporation",
				cost_in_credits: "150000",
				length: "36.8 ",
				max_atmosphering_speed: "30",
				crew: "46",
				passengers: "30",
				cargo_capacity: "50000",
				consumables: "2 months",
				vehicle_class: "wheeled",
				pilots: [],
				films: [
					"https://diversunivers.com/api/films/1/",
					"https://diversunivers.com/api/films/5/",
				],
				created: "2014-12-10T15:36:25.724000Z",
				edited: "2014-12-20T21:30:21.661000Z",
				url: "https://diversunivers.com/api/vehicles/4/",
			},
		],
	});
}
