# EmailJS Setup Guide for M Design Studio

## Quick Setup Steps

### 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up with your email (use dheerajsiet123@gmail.com)

### 2. Create Email Service
- Go to Email Services → Add New Service
- Choose Gmail
- Service ID: `service_mdesign`
- Connect your Gmail account (dheerajsiet123@gmail.com)

### 3. Create Email Template
- Go to Email Templates → Create New Template
- Template ID: `template_contact`
- Template content:

```
Subject: New Contact from {{from_name}} - M Design Studio

Hello M Design Studio,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Message: {{message}}

Please respond to: {{reply_to}}

Best regards,
M Design Studio Website
```

### 4. Get Public Key
- Go to Account → API Keys
- Copy your Public Key

### 5. Update Configuration
In `client/src/services/emailjs.js`, replace:
```javascript
const PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';
```
with your actual public key.

### 6. Test the Form
- Start your application
- Fill out the contact form
- Check your email (dheerajsiet123@gmail.com) for the message

## Template Variables Used
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{phone}}` - User's phone number
- `{{message}}` - User's message
- `{{reply_to}}` - User's email for replies

## Security Notes
- Public key is safe to expose in frontend code
- No sensitive credentials are stored in the code
- EmailJS handles all email authentication securely