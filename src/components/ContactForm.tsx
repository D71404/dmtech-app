import React, { useState, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { translations } from '../translations';
import { init, send } from '@emailjs/browser';
import toast from 'react-hot-toast';
import { emailConfig } from '../config/email';
import { CONTACT_INFO } from '../config/constants';

interface ContactFormProps {
  language: 'en' | 'gr';
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm({ language }: ContactFormProps) {
  const t = translations[language];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    init(emailConfig.publicKey);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: CONTACT_INFO.email
        }
      );

      toast.success(language === 'en' ? 'Message sent successfully!' : 'Το μήνυμα στάλθηκε με επιτυχία!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error(language === 'en' ? 'Failed to send message. Please try again.' : 'Αποτυχία αποστολής. Παρακαλώ δοκιμάστε ξανά.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">{t.contact.form.name}</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
            placeholder={t.contact.form.namePlaceholder}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">{t.contact.form.email}</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
            placeholder={t.contact.form.emailPlaceholder}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">{t.contact.form.message}</label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-none"
            placeholder={t.contact.form.messagePlaceholder}
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-500/80 backdrop-blur-sm text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600/80 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black/50 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>{t.contact.form.sending}</span>
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            <span>{t.contact.form.send}</span>
          </>
        )}
      </button>
    </form>
  );
}