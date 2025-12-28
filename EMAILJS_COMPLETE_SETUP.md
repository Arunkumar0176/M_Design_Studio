# 📧 EmailJS Setup Guide - service_dd39g6o

## ✅ Current Status:
- **Service ID:** `service_dd39g6o` ✅ Configured
- **EmailJS Package:** ✅ Installed
- **Contact Form:** ✅ Updated

## 🔧 Complete These 3 Steps:

### Step 1: Get Your Public Key
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click **Account** → **API Keys**
3. Copy your **Public Key** (starts with "user_" or similar)
4. Update in `client/src/services/emailjs.js`:
   ```javascript
   const PUBLIC_KEY = 'your_actual_public_key_here';
   ```

### Step 2: Create Email Template
1. In EmailJS Dashboard → **Email Templates**
2. Click **Create New Template**
3. Set **Template ID:** `template_mdesign`
4. **Template Content:**
   ```
   Subject: New Contact - {{from_name}} | M Design Studio

   Hello M Design Studio,

   You have a new contact form submission:

   📝 Name: {{from_name}}
   📧 Email: {{from_email}}
   📱 Phone: {{phone}}
   
   💬 Message:
   {{message}}

   ---
   Reply to: {{reply_to}}
   Sent from: M Design Studio Website
   ```

### Step 3: Configure Email Service
1. In EmailJS Dashboard → **Email Services**
2. Make sure your service `service_dd39g6o` is connected to Gmail
3. Set **To Email:** `dheerajsiet123@gmail.com`

## 🎯 Template Variables Used:
- `{{from_name}}` - Contact's name
- `{{from_email}}` - Contact's email  
- `{{phone}}` - Contact's phone
- `{{message}}` - Contact's message
- `{{reply_to}}` - For easy replies
- `{{to_email}}` - Your email address

## 🚀 After Setup:
1. **Test the contact form**
2. **Check your email** (dheerajsiet123@gmail.com)
3. **Verify email delivery**

## 📋 Files Updated:
- ✅ `client/src/services/emailjs.js` - EmailJS config
- ✅ `client/src/components/Contact.js` - Form handler
- ✅ Service ID: `service_dd39g6o` configured

## 🔍 Testing:
- Fill out contact form
- Check browser console for logs
- Verify email received
- Form should show "Message sent successfully!"

**Once you complete these 3 steps, your contact form will send emails directly via EmailJS!** 🎉