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

app.use('/api/auth', authRoutes);

// Server setup
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
