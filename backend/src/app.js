const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { v4: uuidv4 } = require('uuid');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(cors()); 
app.use(bodyParser.json());

// Import and use routes
const productsRoutes = require('./routes/products');
app.use('/api/products', productsRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
