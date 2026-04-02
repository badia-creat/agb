import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const [status, setStatus] = useState(null);

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('loading');

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "New Inquiry",
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setStatus('success');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

  } catch (err) {
    console.error(err);
    setStatus('error');
  }
};

  return (
    <div className="flex flex-col pt-20">
      {/* Hero */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Have a project in mind or need a consultation? Our team of experts is 
              ready to assist you with your engineering needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Reach out to us through any of the following channels or fill out the 
                  inquiry form and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-neutral flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Email Addresses</h4>
                    <div className="flex flex-col space-y-1 text-gray-600">
                      <a href="mailto:info@agbengineering.co.ke" className="hover:text-primary transition-colors">info@agbengineering.co.ke</a>
                      <a href="mailto:sales@agbengineering.co.ke" className="hover:text-primary transition-colors">sales@agbengineering.co.ke</a>
                      <a href="mailto:badia@agbengineering.co.ke" className="hover:text-primary transition-colors">badia@agbengineering.co.ke</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-neutral flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Phone Number</h4>
                    <p className="text-gray-600">+254721133185</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-neutral flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Office Location</h4>
                    <p className="text-gray-600">Nairobi, Kenya<br />P.O. Box 00100, AdisAbaba road off Enterprise road</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-neutral p-10 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send an Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ken Kamau"
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="kamau@example.com"
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Subject</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Message</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                
                <button 
                  disabled={status === 'loading'}
                  type="submit" 
                  className="w-full soft-ui-button bg-primary text-white text-lg flex items-center justify-center space-x-2 hover:bg-accent disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 text-green-700 rounded-2xl flex items-center space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-medium">Thank you! Your inquiry has been sent successfully.</p>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 text-red-700 rounded-2xl flex items-center space-x-3"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-medium">Something went wrong. Please try again later.</p>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-neutral relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-2xl italic">
          Interactive Map Placeholder(Will be available soon...)
        </div>
        {/* In a real app, integrate Google Maps here */}
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      </section>
    </div>
  );
}
