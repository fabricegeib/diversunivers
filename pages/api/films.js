// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	res.status(200).json({
		count: 6,
		next: null,
		previous: null,
		results: [
			{
				title: "A New Hope",
				episode_id: 4,
				opening_crawl:
					"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
				director: "George Lucas",
				producer: "Gary Kurtz, Rick McCallum",
				release_date: "1977-05-25",
				characters: [
					"/api/peoples/1/",
					"/api/peoples/2/",
					"/api/peoples/3/",
					"/api/peoples/4/",
					"/api/peoples/5/",
					"/api/peoples/6/",
					"/api/peoples/7/",
					"/api/peoples/8/",
					"/api/peoples/9/",
					"/api/peoples/10/",
					"/api/peoples/12/",
					"/api/peoples/13/",
					"/api/peoples/14/",
					"/api/peoples/15/",
					"/api/peoples/16/",
					"/api/peoples/18/",
					"/api/peoples/19/",
					"/api/peoples/81/",
				],
				planets: [
					"https://swapi.dev/api/planets/1/",
					"https://swapi.dev/api/planets/2/",
					"https://swapi.dev/api/planets/3/",
				],
				starships: [
					"https://swapi.dev/api/starships/2/",
					"https://swapi.dev/api/starships/3/",
					"https://swapi.dev/api/starships/5/",
					"https://swapi.dev/api/starships/9/",
					"https://swapi.dev/api/starships/10/",
					"https://swapi.dev/api/starships/11/",
					"https://swapi.dev/api/starships/12/",
					"https://swapi.dev/api/starships/13/",
				],
				vehicles: [
					"https://swapi.dev/api/vehicles/4/",
					"https://swapi.dev/api/vehicles/6/",
					"https://swapi.dev/api/vehicles/7/",
					"https://swapi.dev/api/vehicles/8/",
				],
				species: [
					"https://swapi.dev/api/species/1/",
					"https://swapi.dev/api/species/2/",
					"https://swapi.dev/api/species/3/",
					"https://swapi.dev/api/species/4/",
					"https://swapi.dev/api/species/5/",
				],
				created: "2014-12-10T14:23:31.880000Z",
				edited: "2014-12-20T19:49:45.256000Z",
				url: "https://swapi.dev/api/films/1/",
			},
		],
	});
}
