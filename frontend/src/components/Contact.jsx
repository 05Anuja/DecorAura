import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Data:", formData);

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-[#faf7f3] py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2C23]">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-600">
            Have a question or need assistance? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg p-8 md:p-12">

          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-[#3E2C23] mb-6">
              Get In Touch
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you have a question about our products, an order, or
              anything else, feel free to contact us.
            </p>

            <div className="space-y-5 text-gray-700">
              <div>
                <h3 className="font-semibold text-[#8B5E3C]">Email</h3>
                <p>support@decoraura.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#8B5E3C]">Phone</h3>
                <p>+91 98765 43210</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#8B5E3C]">Address</h3>
                <p>Mumbai, Maharashtra, India</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#8B5E3C]">
                  Working Hours
                </h3>
                <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-[#C79A63] focus:ring-1 focus:ring-[#C79A63]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-[#C79A63] focus:ring-1 focus:ring-[#C79A63]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-[#C79A63] focus:ring-1 focus:ring-[#C79A63]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-[#C79A63] focus:ring-1 focus:ring-[#C79A63]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none resize-none focus:border-[#C79A63] focus:ring-1 focus:ring-[#C79A63]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#8B5E3C] text-white py-3 rounded-lg font-semibold hover:bg-[#6F482E] transition duration-300"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;