// EmailJS Configuration
import emailjs from '@emailjs/browser';

// Development logging helper
const isDev = process.env.NODE_ENV === 'development';
const devLog = (...args) => isDev && console.log(...args);
const devError = (...args) => isDev && console.error(...args);

// EmailJS Configuration - Replace these with your actual values
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE'; // Get this from EmailJS Dashboard > Account > API Keys
const SERVICE_ID = 'service_dd39g6o'; // Your service ID
const TEMPLATE_ID = 'template_mdesign'; // Create this template in EmailJS Dashboard

// Initialize EmailJS
if (PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE') {
  emailjs.init(PUBLIC_KEY);
}

export const sendContactEmail = async (formData) => {
  // Check if EmailJS is properly configured
  if (PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE' || PUBLIC_KEY === 'YOUR_ACTUAL_PUBLIC_KEY') {
    devLog('⚠️ EmailJS not configured: PUBLIC_KEY is still placeholder');
    return { success: false, error: 'EmailJS not configured - PUBLIC_KEY needed' };
  }

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || 'Not provided',
    message: formData.message,
    to_name: 'M Design Studio',
    reply_to: formData.email,
    to_email: 'dheerajsiet123@gmail.com'
  };

  try {
    devLog('🚀 EmailJS Config:');
    devLog('- Service ID:', SERVICE_ID);
    devLog('- Template ID:', TEMPLATE_ID);
    devLog('- Public Key:', PUBLIC_KEY.substring(0, 10) + '...');
    
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );
    
    devLog('✅ EmailJS SUCCESS:', response);
    return { success: true, response };
  } catch (error) {
    devError('❌ EmailJS FAILED:');
    devError('Error:', error);
    devError('Error message:', error.message);
    
    return { success: false, error: error.message || error };
  }
};

export default emailjs;