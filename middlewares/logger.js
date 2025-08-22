// middleware/logger.js
module.exports = (req, res, next) => {
    const { method, url, body } = req;
    console.log(`[${new Date().toISOString()}] ${method} ${url} - Body:`, body);
    next();
};
