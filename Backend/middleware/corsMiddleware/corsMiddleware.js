
const allowedOrigins = ["https://66d2f323b15368f40d37f7ff--gentle-biscotti-8619f2.netlify.app"];

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
