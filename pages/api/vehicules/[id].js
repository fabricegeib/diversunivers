export default function handler(req, res) {
	const { id } = req.query
	res.end(`Documentaire : ${id}`)
}