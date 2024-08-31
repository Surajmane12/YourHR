
const allowedOrigins = ["https://66d2e0709886f0e2ae2f8c73--roaring-marigold-e0f356.netlify.app"];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

module.exports = corsOptions;
