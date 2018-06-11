import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';

import authRoutes from './routes/authRoutes';

const app = express();
const PORT = process.env.PORT || 3001;

// DB setup
mongoose.connect('mongodb://localhost/react-jwt-auth');

// App setup
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  next();
});

app.use('/api/auth', authRoutes);

// Server setup
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
