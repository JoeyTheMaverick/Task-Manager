const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const verifyJWT = require('./middleware/auth');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.get('/api/profile', verifyJWT, (req, res) => {
  res.json({ message: "Protected route accessed!", user: req.user });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
