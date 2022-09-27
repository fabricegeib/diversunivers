// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    title: "divers univers - api",
    owner: "Fabrice Geib",
    pages: [
      { hello: "/api/hello/" },
      { people: "/api/people/" },
      { planets: "/api/planets/" },
      { films: "/api/films/" },
      { species: "/api/species/" },
      { vehicles: "/api/vehicles/" },
      { starships: "/api/starships/" },
    ],
  });
}
