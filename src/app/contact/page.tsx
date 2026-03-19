'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Your WhatsApp Number (No '+' or spaces)
      const myWhatsAppNumber = "918979903752"; 

      // 2. Format the message for WhatsApp
      // %0A creates a new line in the message
      const text = `*New Website Inquiry*
                   *Name:* ${formData.name}
                   *Email:* ${formData.email}
                   *Phone:* ${formData.phone}
                   *Course:* ${formData.course}
                   *Message:* ${formData.message}`;

      // 3. Open the WhatsApp link in a new tab
      const url = `https://wa.me/${918979903752}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');

      // 4. Update the UI to show success
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">Ready to start your French learning journey? Get in touch!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            {[
              {
                icon: "📧",
                title: "Email",
                info: "Thatismyfrench@gmail.com",
                subInfo: "We'll reply within 10 hours"
              },
              {
                icon: "📞",
                title: "Phone",
                info: "+91-8979903752",
                subInfo: "Monday to Friday, 9 AM - 6 PM EST"
              },
              {
                icon: "📍",
                title: "Location",
                info: "Canada/India",
                subInfo: "Serving students across all provinces"
              },
            ].map((contact, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-5xl mb-4">{contact.icon}</div>
                <h3 className="font-bold text-lg text-primary mb-2">{contact.title}</h3>
                <p className="font-semibold text-gray-800 mb-1">{contact.info}</p>
                <p className="text-sm text-gray-600">{contact.subInfo}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="card">
              <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg border-l-4 border-green-600">
                  <p className="font-semibold">✓ Message sent successfully!</p>
                  <p className="text-sm">We'll be in touch soon. Check your email for updates.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+1 (XXX) XXX-XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Interested Course *</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a course</option>
                    <option value="teff">TEF/TCF Intensive</option>
                    <option value="delf">DELF/DALF Mastery</option>
                    <option value="conversational">Conversational French</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us about your goals and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Info & Benefits */}
            <div>
              <div className="card mb-6">
                <h3 className="text-xl font-bold text-primary mb-6">Why Contact Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Get personalized course recommendations",
                    "Discuss your learning goals and challenges",
                    "Learn about our flexible batch timings",
                    "Ask about special discounts and offers",
                    "Schedule a free demo class",
                    "Get answers to all your questions"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-secondary text-lg">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary to-blue-800 text-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Quick Response Guarantee</h3>
                <p className="mb-4">We value your time and will respond to all inquiries within 24 hours.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Fast responses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Expert guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>No obligation</span>
                  </div>
                </div>
              </div>

              <div className="card mt-6">
                <h3 className="font-bold text-primary mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM EST</p>
                  <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM EST</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                q: "What if I don't have prior French experience?",
                a: "We have courses for all levels, from complete beginners to advanced learners. Our instructors are skilled at providing individualized attention."
              },
              {
                q: "Can I attend classes if I work full-time?",
                a: "Yes! We offer flexible scheduling with multiple batch timings including evenings and weekends."
              },
              {
                q: "Is there a money-back guarantee?",
                a: "Our CLB 7+ program includes a pass guarantee. For other courses, we offer a 100% satisfaction guarantee."
              },
              {
                q: "How are online classes conducted?",
                a: "We use secure video conferencing platforms with interactive whiteboards, screen sharing, and recorded sessions for review."
              },
              {
                q: "What is the class size?",
                a: "We maintain small batches of 5-8 students to ensure personalized attention and quality instruction."
              },
              {
                q: "Do you provide study materials?",
                a: "Yes, comprehensive study materials, practice tests, and resources are included with all courses."
              },
            ].map((item, idx) => (
              <div key={idx} className="card">
                <h3 className="font-bold text-primary mb-2">Q: {item.q}</h3>
                <p className="text-gray-700 ml-4">A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
