require('dotenv').config();
const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');
const app = express();

app.use(cors(
    {
        origin: 'https://meraki-bay.vercel.app/',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }
));
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use Routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));