import React from 'react';
import { Loader2, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';



export default function Contact() {
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      await emailjs.send(
        'service_vktnnso', // Replace with your EmailJS service ID
        'template_4b7wbdp', // Replace with your EmailJS template ID
        {
          from_name: formData.get('name'),
          from_email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
          to_email: 'diego.sanchezhere@gmail.com',
        },
        'EiTirAkf2lLj20fRt' // Replace with your EmailJS public key
      );

      toast.success('Message sent successfully!');
      form.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Contacto</h1>
        {/* Contact Form */}
        <section id="contact" className="bg-gray-400 space-y-8 scroll-mt-16">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 text-white"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 text-white"
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-black  ">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 text-white"
                  placeholder="Project Inquiry"
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-black">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 text-white resize-none"
                  placeholder="Your message here..."
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <MessageSquare className="w-5 h-5 transform transition-transform group-hover:scale-110" />
                  </>
                )}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}