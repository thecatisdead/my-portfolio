import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0F111A] text-white px-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      <p className="text-gray-400 mb-10 text-center max-w-lg">
        Whether you have a project in mind, want to collaborate, or just say hi, feel free to reach out!
      </p>


      <div className="flex gap-6 mt-10">
        <a href="mailto:your@email.com" className="hover:text-cyan-400 transition">
          <Mail size={28} />
        </a>
        <a href="https://github.com/yourusername" target="_blank" className="hover:text-cyan-400 transition">
          <Github size={28} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-cyan-400 transition">
          <Linkedin size={28} />
        </a>
      </div>
    </section>
  );
}
