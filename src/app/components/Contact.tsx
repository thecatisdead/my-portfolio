import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-[#0F111A] text-white px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      <p className="text-gray-400 mb-10 text-center max-w-lg">
        Whether you have a project in mind, want to collaborate, or just say hi,
        feel free to reach out!
      </p>

      {/* Contact Form */}
      <div className="w-full max-w-md mb-10">
        <form
          action="https://formsubmit.co/regeryl1100@gmail.com"
          method="POST"
          className="space-y-4"
        >
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-gray-400"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-gray-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-gray-400 resize-none"
              placeholder="Tell me about your project or just say hi!"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mt-10">
        <a
          href="mailto:regeryl1100@gmail.com"
          className="hover:text-cyan-400 transition"
        >
          <Mail size={28} />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <Github size={28} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <Linkedin size={28} />
        </a>
      </div>
    </section>
  );
}
