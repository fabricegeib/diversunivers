// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	res.status(200).json({
		count: 1,
		next: null,
		previous: null,
		results: [
			{
				title: "ANGELITA",
				id: 1,
				episode_id: 1,
				opening_crawl:
					"A love story that beckons you to dive deeper….\r\n",
				director: "Josiah Gordon",
				producer: "Chelsea Yamase, Rick McCallum",
				release_date: "2021-05-19",
				characters: [
					"https://diversunivers.vercel.app/api/people/1/",
					"https://diversunivers.vercel.app/api/people/2/",
				],
				planets: [
					"https://diversunivers.vercel.app/api/planets/1/",
				],
				starships: [
					"https://diversunivers.vercel.app/api/starships/2/",
				],
				vehicles: [
					"https://diversunivers.vercel.app/api/vehicles/4/",
				],
				species: [
					"https://diversunivers.vercel.app/api/species/1/",
				],
				links: {
					spotify: "https://open.spotify.com/track/51VtcSzMmuKyzm9uavaJ1M?si=1c915e2ec7cf4f85&nd=1",
					youtube: "https://www.youtube.com/watch?v=NsmGYTPF9AE",
				},
				created: "2022-10-03T16:20:30.880000Z",
				edited: "2022-10-03T16:20:30.256000Z",
				url: "https://diversunivers.vercel.app/api/documentaires/1/",
			},
		],
	});
}

// ANGELITA
// Filmed, Written and Directed By Josiah Gordon
// Starring Chelsea Yamase and Sam Kolder
// Original Score “Angelita” by Matthew Morgan
// Editing by Emmett Sparling
// Coloring by Jake Pierrelee
// Stunts by Sasha Juliard
// Safety Divers Angel Oviedo, Cami Torres, and Matthew Duvault
// Special thanks to Bray’s Run Production