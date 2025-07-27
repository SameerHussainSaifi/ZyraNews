export default async function handler(req, res) {
  const apiKey = process.env.NEWS_API_KEY;

  const { query, type, from, to } = req.query;

  let url = "";

  if (type === "everything") {
    url = `https://newsapi.org/v2/everything?q=${query}&from=${from}&to=${to}&sortBy=popularity&pageSize=30&language=en&apiKey=${apiKey}`;
  } else if (type === "top-headlines") {
    url = `https://newsapi.org/v2/top-headlines?sources=${query}&apiKey=${apiKey}`;
  } else {
    return res.status(400).json({ error: "Invalid type" });
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("API error:", err);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
