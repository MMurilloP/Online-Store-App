const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MY_MONGO_URI;

mongoose.set('strictQuery', false);

const connectDb = () => {
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
};

describe('MongoDB Connection', () => {
  beforeAll(async () => {
    await connectDb();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should connect to MongoDB', () => {
    expect(mongoose.connection.readyState).toBe(1);
  });
});
