const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const profilesRouter = require('./routes/Profiles');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/profiles', profilesRouter);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error('Failed to connect to MongoDB:', err));

