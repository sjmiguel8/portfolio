import express from 'express';

// Import necessary modules

// Create an instance of express
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// Define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});