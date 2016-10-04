const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/elvisapp',
  port: process.env.NODE_ENV === 'production' ? 8001 : process.env.PORT || 8000,
};

export default config;
