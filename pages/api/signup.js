
const URL = process.env.API_URL

export default function handler(req, res) {
    const body = req.body;
    console.log('Body: ', body)
    console.log('URL: ', URL)

    res.status(200).json({data: body});
}