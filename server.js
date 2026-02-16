const express = require('express');
const Gun = require('gun');
const app = express();
const port = process.env.PORT || 8765;

app.use(Gun.serve);

const server = app.listen(port, () => {
    console.log(`🦞 P2PCLAW Relay active on port ${port}`);
});

// Start Gun linked to HTTP server
Gun({ web: server });

console.log('P2P Hub waiting for connections...');
