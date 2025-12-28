// EmailJS Configuration - REPLACE WITH YOUR ACTUAL VALUES
import emailjs from '@emailjs/browser';

// TODO: Replace these with your actual EmailJS values
const PUBLIC_KEY = 'YOUR_ACTUAL_PUBLIC_KEY'; // From EmailJS Dashboard > Account > API Keys
const SERVICE_ID = 'service_dd39g6o'; // ✅ Your service ID (correct)
const TEMPLATE_ID = 'template_mdesign'; // Create this template in EmailJS Dashboard

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

export const sendContactEmail = async (formData) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || 'Not provided',
    message: formData.message,
    to_name: 'M Design Studio',
    reply_to: formData.email
  };

  try {
    console.log('🚀 Sending email with EmailJS...');
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );
    
    console.log('✅ Email sent successfully!', response);
    return { success: true, response };
  } catch (error) {
    console.error('❌ EmailJS failed:', error);
    return { success: false, error };
  }
};

export default emailjs;