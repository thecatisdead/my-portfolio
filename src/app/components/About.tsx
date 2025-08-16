import photo from "@/app/images/senior2.png";
import photo2 from "@/app/images/cmu.png";
import firebase from "@/app/images/firebase.png";
import flutter from "@/app/images/flutter.png";
import react from "@/app/images/react.png";
import laravel from "@/app/images/laravel.png";
import html from "@/app/images/html.png";
import css from "@/app/images/css.png";
import nextjs from "@/app/images/nextjs.png";
import supabase from "@/app/images/supabase.png";

export default function About() {
  const techStack = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "Next.js", icon: nextjs },
    { name: "Laravel", icon: laravel },
    { name: "Flutter", icon: flutter },
    { name: "React", icon: react },
    { name: "Firebase", icon: firebase },
    { name: "Supabase", icon: supabase },
  ];
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#0F111A] via-[#1A1C29] to-[#0F111A] flex flex-col items-start px-4 sm:px-6 md:px-12 lg:px-20"
>
      <h2 className="text-2xl font-bold mb-4 text-center text-white animate-fadeIn">
        About Me
      </h2>

      <p className="text-md mb-12 text-start text-white animate-fadeIn">
        I recently graduated from Central Mindanao University with a degree in
        Software Development. I enjoy building modern web applications and
        scalable SaaS platforms using frameworks like Flutter, React Native
        (Expo), Next.js, and Laravel. I’ve joined events such as a 24-hour
        hackathon and Startup Weekend, where I learned how to solve problems
        quickly and build prototypes efficiently while gaining hands-on,
        real-world experience. I also volunteer with DEVCON, where I get to
        connect with other developers and grow within the tech community.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-center text-white animate-fadeIn">
        Skills
      </h2>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index, icon) => (
          <div
            key={index}
            className="h-[30px] px-3 bg-white rounded-xl flex items-center justify-center text-xs sm:text-sm text-black"
            >
            <img
              src={typeof tech.icon === "string" ? tech.icon : tech.icon.src}
              alt={tech.name}
              className="w-3 h-3 sm:w-4 sm:h-4"
            />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-12 text-center text-white animate-fadeIn">
        Education
      </h2>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 w-full">

        {/* Column 1 - Image */}
        <img src={photo.src} alt="Photo" className="w-14 h-14 rounded-full" />

        {/* Column 2 - School Info */}
        <div className="flex flex-col flex-1">
          <strong>Valencia National Senior High School</strong>
          <span className="text-[14px]">Computer System Servicing</span>
        </div>

        {/* Column 3 - Date */}
        <div className="sm:text-right sm:pl-10">

          <p className="font-bold">2017-2019</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 w-full">


        {/* Column 1 - Image */}
        <img src={photo2.src} alt="Photo" className="w-14 h-14 rounded-full" />

        {/* Column 2 - School Info */}
        <div className="flex flex-col flex-1">
          <strong>Central Mindanao University</strong>
          <span className="text-[14px]">BSIT Software Development</span>
        </div>

        {/* Column 3 - Date */}
        <div className="sm:text-right sm:pl-10">
          <p className="font-bold" >2020-2025</p>
        </div>
      </div>
    </section>
  );
}
