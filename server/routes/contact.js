const express = require('express');
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
const router = express.Router();

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dheerajsiet123@gmail.com',
    pass: 'dheeraj@123'
  }
});

// Submit contact form
router.post('/', async (req, res) => {
  try {
    console.log('Received contact form data:', req.body);
    
    // Save to MongoDB first
    const contact = new Contact(req.body);
    await contact.save();
    console.log('Contact saved to MongoDB:', contact._id);
    
    // Send email after successful save
    const { name, email, phone, message } = req.body;
    const mailOptions = {
      from: 'dheerajsiet123@gmail.com',
      to: 'dheerajsiet123@gmail.com',
      subject: `New Contact Form Message from ${name} - M Design Studio`,
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
          <p style="color: #6b7280; font-size: 12px;">Contact ID: ${contact._id}<br/>Submitted: ${new Date().toLocaleString()}</p>
        </div>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Email sending failed, but contact saved:', emailError.message);
      // Continue even if email fails - contact is saved
    }
    
    res.json({ 
      message: 'Contact form submitted successfully',
      contactId: contact._id 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ error: 'Failed to process contact form: ' + error.message });
  }
});

// Get all contacts (for admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;