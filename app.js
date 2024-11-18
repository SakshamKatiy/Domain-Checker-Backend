const express = require('express');
const cors = require('cors');
require('dotenv').config();

const domainRoutes = require('./routes/domainRoutes');

const app = express();


app.use(cors());
app.use(express.json());

// Use domain routes
app.use('/api', domainRoutes);

// Start the server
const PORT = process.env.PORT || 5000;  
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
