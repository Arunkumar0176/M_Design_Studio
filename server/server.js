const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-domain.com'] 
    : /^http:\/\/localhost:\d+$/,
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('MongoDB connection error:', err));

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dheerajsiet123@gmail.com',
    pass: 'dheeraj@123'
  }
});

// Routes
app.use('/api/content', require('./routes/content'));
app.use('/api/gallery', require('./routes/gallery'));
app.use('/api/contact', require('./routes/contact'));

// Email sending route
app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, message, subject } = req.body;
  
  const mailOptions = {
    from: 'dheerajsiet123@gmail.com',
    to: 'dheerajsiet123@gmail.com',
    subject: subject || `New Contact Form Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">New Contact Form Submission</h2>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong style="color: #374151;">Name:</strong> ${name}</p>
          <p><strong style="color: #374151;">Email:</strong> ${email}</p>
          <p><strong style="color: #374151;">Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong style="color: #374151;">Message:</strong></p>
          <div style="background-color: white; padding: 15px; border-left: 4px solid #1e40af; margin-top: 10px;">
            ${message}
          </div>
        </div>
        <p style="color: #6b7280; font-size: 12px;">This message was sent from M Design Studio contact form.</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});