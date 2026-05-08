
export default function RiyaPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-purple-500/5 to-black"></div>

        <div className="relative z-10 max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-pink-300 text-sm mb-4">
            Developer • Dreamer • Builder
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Hi, I’m <span className="text-pink-400">Riya</span> ✨
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            A CSE student from Bikaner building things with React, Node.js,
            Fastify & stubborn hope. Somewhere between open source commits,
            late-night debugging, poetry, and chasing the FANG dream.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a
              href="https://github.com/riyap03"
              target="_blank"
              className="bg-pink-500 hover:bg-pink-400 transition-all px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-pink-500/20"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/riya-panwar-486845332/"
              target="_blank"
              className="border border-zinc-700 hover:border-pink-400 hover:text-pink-300 transition-all px-6 py-3 rounded-2xl"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-zinc-400 leading-relaxed text-lg">
            I’m currently in 2nd year Computer Science Engineering at ECB,
            Bikaner. I love building clean interfaces, contributing to open
            source, solving DSA problems, and turning emotions into code and
            poetry.
          </p>

          <p className="text-zinc-400 leading-relaxed text-lg mt-5">
            My world right now is React components, Fastify pull requests,
            LeetCode battles, hackathons, and building my project — SkillSnap.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-semibold mb-6 text-pink-300">
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Fastify",
              "C++",
              "DSA",
              "Git",
              "GitHub",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-black border border-zinc-700 px-4 py-2 rounded-full text-sm hover:border-pink-400 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black border border-zinc-800 rounded-3xl p-8 hover:border-pink-400 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-pink-300">
                SkillSnap
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                AI-powered portfolio generator + roadmap platform helping
                students build personalized learning journeys and portfolios.
              </p>
            </div>

            <div className="bg-black border border-zinc-800 rounded-3xl p-8 hover:border-pink-400 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-pink-300">
                Fastify Open Source Contributions
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Contributed to Fastify by improving printRoutes behavior,
                benchmark comparisons, and ESLint configuration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-6 py-28 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-3xl md:text-5xl font-bold leading-relaxed text-zinc-200 italic">
            “Some girls write diaries.
            <br />
            I write commits, code, and little revolutions.”
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-20 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>

          <p className="text-zinc-400 text-lg mb-10">
            Open for internships, collaborations, hackathons, and cool ideas.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:riyapanwar0307@gmail.com"
              className="bg-pink-500 hover:bg-pink-400 transition-all px-6 py-3 rounded-2xl font-semibold"
            >
              Email Me
            </a>

            <a
              href="https://github.com/riyap03"
              target="_blank"
              className="border border-zinc-700 hover:border-pink-400 transition-all px-6 py-3 rounded-2xl"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
