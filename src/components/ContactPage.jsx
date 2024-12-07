import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../index.css";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xwpkwdbg");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Check for successful submission
  if (state.succeeded) {
    return (
      <div className=" bg-[#100319] text-gray-300 flex flex-col">
        <section className="flex-1 py-20">
          <div className="container mx-auto px-6 flex flex-col items-center text-center">
            <h1 className="text-5xl font-extrabold text-gray-100 mb-6">
              Thank you for contacting us!
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-12">
              We have received your message and will get back to you soon.
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#100319] text-gray-300 flex flex-col">
      <section className="flex-1 py-20">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <h1 className="text-5xl font-extrabold text-gray-100 mb-6 animate-fade-in-down">
            Get in <span className="text-purple-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-12 animate-fade-in-up">
            Have questions, feedback, or just want to say hello? Drop us a
            message, and we’ll get back to you as soon as possible!
          </p>
        </div>
      </section>

      <section
        className={`bg-[#281236] py-16 ${state.succeeded ? "hidden" : ""}`}
      >
        <div className="container mx-auto px-2 text-center">
          <h2 className="text-4xl font-semibold text-gray-100 mb-12 animate-fade-in-down">
            Contact Us
          </h2>

          <div className="card bg-purple-600 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-lg mx-auto">
            <div className="card-content p-6 text-left">
              <form
                onSubmit={handleSubmit}
                className="space-y-8"
                autoComplete="off"
              >
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    autoComplete="off"
                    className="w-full bg-transparent text-gray-300 border-b border-gray-500 focus:outline-none focus:ring-0 focus:border-purple-500 transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    autoComplete="off"
                    className="w-full bg-transparent text-gray-300 border-b border-gray-500 focus:outline-none focus:ring-0 focus:border-purple-500 transition-all duration-300"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    rows="5"
                    autoComplete="off"
                    className="resize-none w-full bg-transparent text-gray-300 border-b border-gray-500 focus:outline-none focus:ring-0 focus:border-purple-500 transition-all duration-300"
                    style={{ height: "150px" }}
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="relative text-lg inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-purple-500 rounded-lg group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-700 rounded-full group-hover:w-full group-hover:h-56"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                  <span className="relative">
                    {state.submitting ? "Submitting..." : "Send Message"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
