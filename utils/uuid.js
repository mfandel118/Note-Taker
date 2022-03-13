// Export function to generate random alpha-numeric string for Note ID value

const uuid = () =>
    Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);

module.exports = uuid;