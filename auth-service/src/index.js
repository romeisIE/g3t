const port = process.env.PORT || 8080;

console.log(`Starting timeentry export service`);
console.log(`Listening on port ${port}`);

function handleExit(signal) {
    console.log(`Received ${signal}`);
    process.exit(0);
}

process.on('SIGINT', handleExit);
process.on('SIGTERM', handleExit);
