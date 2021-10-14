const interval = process.env.FETCH_INTERVAL || 0;

console.log(`Fetch interval is ${interval}ms`);

const handleFetch = async () => {
    console.log("Handle fetch...")
};

let intervalObj = undefined;
if (interval > 0) {
    intervalObj = setInterval(handleFetch, interval);
}
setImmediate(handleFetch);

function handleExit(signal) {
    console.log(`Received ${signal}`);
    // Handle
    process.exit(0);
}

process.on('SIGINT', handleExit);
process.on('SIGTERM', handleExit);