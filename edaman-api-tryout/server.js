const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());

console.log("ENV:", {
  app_id: process.env.REACT_APP_API_ID,
  app_key: process.env.REACT_APP_API_KEY
});


app.get('/api/recipes', async (req, res) => {
  const { q, mealType } = req.query;

  try {
    const response = await axios.get('https://api.edamam.com/search', {
      params: {
        q,
        app_id: process.env.REACT_APP_API_ID,
        app_key: process.env.REACT_APP_API_KEY,
        mealType
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching from Edamam:', error.response?.data || error.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

if (require.main === module) {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
