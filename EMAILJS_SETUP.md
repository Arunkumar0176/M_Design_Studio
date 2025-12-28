# EmailJS Setup Instructions

## ✅ Current Status:
- **Service ID:** service_dd39g6o (configured)
- **EmailJS package:** Installed
- **Contact form:** Updated to use EmailJS

## 🔧 Steps to Complete Setup:

### 1. Get Your Public Key
- Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
- Navigate to **Account** → **API Keys**
- Copy your **Public Key**

### 2. Create Email Template
- In EmailJS Dashboard, go to **Email Templates**
- Click **Create New Template**
- Use template ID: `template_contact`
- Template content example:
```
Subject: New Contact Form - {{from_name}}

Hello M Design Studio,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Message: {{message}}

Best regards,
Website Contact Form
```

### 3. Update Configuration
- Open: `client/src/services/emailjs.js`
- Replace `YOUR_PUBLIC_KEY` with your actual public key
- Verify service ID is `service_dd39g6o`
- Verify template ID is `template_contact`

### 4. Test the Form
- Start your React app: `npm start`
- Fill out the contact form
- Check your email for the message

## 🎯 How It Works:
1. **User fills form** → **EmailJS sends email directly**
2. **Also saves to MongoDB** (backup)
3. **No server email configuration needed**
4. **Works from client-side only**

## 📧 Email Variables Available:
- `{{from_name}}` - Contact's name
- `{{from_email}}` - Contact's email
- `{{phone}}` - Contact's phone
- `{{message}}` - Contact's message
- `{{to_name}}` - M Design Studio

## 🔒 Security:
- Public key is safe to expose (client-side)
- EmailJS handles email delivery securely
- No sensitive credentials in frontend code

## ✅ Benefits:
- **No server email configuration needed**
- **Reliable email delivery**
- **Easy to setup and maintain**
- **Works without backend server**