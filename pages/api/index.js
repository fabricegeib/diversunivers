// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	res.status(200).json({
		title: "api",
		owner: "Fabrice Geib",
		pages: [
			{ hello: "/api/hello/" },
			{ documentaires: "/api/documentaires/" },
			{ people: "/api/peoples/" },
			{ planets: "/api/planets/" },
			{ films: "/api/films/" },
			{ species: "/api/species/" },
			{ vehicles: "/api/vehicles/" },
			{ starships: "/api/starships/" },
		],
	});
}
