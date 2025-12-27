import { useState } from 'react';
import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function useEmailJS() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = async (formData: ContactFormData) => {
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const missingKeys = [];
      if (!serviceId) missingKeys.push('VITE_EMAILJS_SERVICE_ID');
      if (!templateId) missingKeys.push('VITE_EMAILJS_TEMPLATE_ID');
      if (!publicKey) missingKeys.push('VITE_EMAILJS_PUBLIC_KEY');

      if (missingKeys.length > 0) {
        console.warn('Missing EmailJS configuration keys:', missingKeys.join(', '));
        console.info('Falling back to mailto: due to missing configuration.');
      }

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Sailesh S',
          },
          publicKey
        );
        setSubmitStatus('success');
      } else {
        console.error('EmailJS configuration missing');
        setSubmitStatus('error');
        setErrorMessage('EmailJS configuration is missing. Please check your .env file.');
      }
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setErrorMessage(`Failed to send: ${error.text || error.message || 'Unknown error'}.`);
    }
  };

  return {
    submitStatus,
    errorMessage,
    sendEmail,
    setSubmitStatus,
    setErrorMessage
  };
}