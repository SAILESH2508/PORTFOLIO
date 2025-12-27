import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useEmailJS } from '../hooks/useEmailJS';
import ConfettiEffect from './ConfettiEffect';
import RevealOnScroll from './RevealOnScroll';
import AnimatedTitle from './AnimatedTitle';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [triggerConfetti, setTriggerConfetti] = useState(false);
  const { submitStatus, errorMessage, sendEmail, setSubmitStatus, setErrorMessage } = useEmailJS();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await sendEmail(formData);
    
    if (submitStatus === 'success') {
      setTriggerConfetti(true);
      setTimeout(() => setTriggerConfetti(false), 5000);
      setFormData({ name: '', email: '', message: '' });
    }

    setIsSubmitting(false);
    setTimeout(() => {
      setSubmitStatus('idle');
      setErrorMessage('');
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-transparent">
      <ConfettiEffect trigger={triggerConfetti} />
      <div className="container mx-auto max-w-[95%]">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <AnimatedTitle
              title="Get In Touch"
              icon={Mail}
            />
            <p className="text-xl text-gray-600 mt-[-2rem] relative z-10">Let's discuss your next project</p>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <RevealOnScroll delay={0.2}>
            <div className="space-y-8">
              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="p-4 bg-purple-50 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email Me</p>
                      <a href="mailto:sailesh25008@gmail.com" className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        sailesh25008@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="p-4 bg-purple-50 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-lg font-semibold text-gray-900">Coimbatore</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-4">Connect with me</p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/sailesh-s-024368257/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 text-gray-600 rounded-lg hover:bg-[#0077b5] hover:text-white transition-all transform hover:scale-110"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="https://github.com/Sailesh-24-05"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 text-gray-600 rounded-lg hover:bg-black hover:text-white transition-all transform hover:scale-110"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <form onSubmit={handleSubmit} className="glass-card p-8 lg:p-10 hover:shadow-xl transition-all duration-300 relative">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Send a Message</h3>

              <div className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary transition-colors">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-xl focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/50 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 hover:bg-white/80"
                    placeholder="John Doe"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary transition-colors">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-xl focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/50 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 hover:bg-white/80"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary transition-colors">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-xl focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/50 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 resize-none hover:bg-white/80"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 shadow-lg hover:shadow-purple-600/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-2xl z-20 animate-fade-in">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                      <CheckCircle className="text-green-600" size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-600">I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-purple-50 border border-purple-200 text-purple-700 rounded-xl flex items-center gap-3 animate-shake">
                  <AlertCircle size={20} />
                  <p>{errorMessage}</p>
                </div>
              )}
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
