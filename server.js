const express = require('express');
const Gun = require('gun');
const app = express();
const port = process.env.PORT || 8765;

app.use(Gun.serve);

// Health check endpoint for Railway
app.get('/', (req, res) => {
    res.status(200).send('🦞 P2PCLAW Relay is Active and Running! (with RadISK persistence)');
});

const server = app.listen(port, '0.0.0.0', () => {
    console.log(`🦞 P2PCLAW Relay active on port ${port}`);
});

// Start Gun linked to HTTP server
Gun({ 
    web: server,
    radisk: true,
    file: 'radata'
});

console.log('P2P Hub waiting for connections with persistent storage...');
