export default function Experience() {
  const experiences = [
    {
      role: "Tech Support Intern",
      company: "Dwinar Computer Center",
      period: "Jun 2024 – Aug 2024",
      desc: "Assisted with troubleshooting and resolving technical issues for clients, providing timely and effective support.",
    },

    {
      role: "Frontend Developer Intern",
      company: "Project Moonshot Information Technology Solutions",
      period: "Jun 2024 – Aug 2024",
      desc: "Assisted with troubleshooting and resolving technical issues for clients, providing timely and effective support.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-[#0F111A] via-[#1A1C29] to-[#0F111A] flex flex-col items-start px-22"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-white animate-fadeIn">
        Experience
      </h2>
      <div className="relative max-w-4xl w-full">
        {/* Neon center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-cyan-400 to-purple-500 shadow-[0_0_2px_#00fff7] transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative w-full md:w-1/2 px-6 py-6 bg-[#1A1C29] border border-cyan-500/20 rounded-xl shadow-lg ${
                index % 2 === 0 ? "md:ml-auto md:pl-10" : "md:mr-auto md:pr-10"
              }`}
            >
              <h3 className="text-md font-semibold">
                {exp.role}
              </h3>
              <p className="text-gray-400 text-sm">
                {exp.company} • {exp.period}
              </p>
              <p className="mt-2 text-gray-300 text-sm">{exp.desc}</p>

              {/* Neon glowing dot */}
              <span></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
