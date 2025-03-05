const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/privacy-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'privacy-policy.html'));
});

app.get('/terms-and-conditions', (req, res) => {
    res.sendFile(path.join(__dirname, 'terms-and-conditions.html'));
});

// Handle 404
app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});