// EmailJS Configuration
import emailjs from '@emailjs/browser';

// EmailJS Configuration - Replace with your actual values
const PUBLIC_KEY = 'zS_pocFmB-JHDnvly'; // Your actual public key
const SERVICE_ID = 'service_dd39g6o'; // Your service ID
const TEMPLATE_ID = 'template_mdesign'; // Your template ID

// Initialize EmailJS when the module loads
if (typeof window !== 'undefined' && window.emailjs) {
  // Use global emailjs if available (from CDN)
  window.emailjs.init({
    publicKey: PUBLIC_KEY,
  });
} else if (PUBLIC_KEY && PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
  // Fallback to npm package
  emailjs.init(PUBLIC_KEY);
}

export const sendContactEmail = async (formData) => {
  // Check if EmailJS is configured
  if (!PUBLIC_KEY || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    console.error('⚠️ EmailJS not configured: Please add your PUBLIC_KEY');
    return { success: false, error: 'EmailJS configuration missing' };
  }

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || 'Not provided',
    message: formData.message,
    to_name: 'M Design Studio',
    reply_to: formData.email
  };

  try {
    console.log('📧 Sending email via EmailJS...');
    
    // Use global emailjs from CDN if available, otherwise use npm package
    const emailjsInstance = window.emailjs || emailjs;
    
    const response = await emailjsInstance.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );
    
    console.log('✅ Email sent successfully:', response.status);
    return { success: true, response };
  } catch (error) {
    console.error('❌ EmailJS Error:', error);
    return { success: false, error: error.message || 'Failed to send email' };
  }
};

export default emailjs;