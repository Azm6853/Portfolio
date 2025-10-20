export default function Home() {
  const socials = [
    { name: "Email", href: "mailto:azm6853@psu.edu" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/ani-psu" },
    { name: "GitHub", href: "https://github.com/anirbanmaity218" },
  ];

  const projects = [
    {
      title: "AI Interview Agent (POC)",
      desc: "Role-aware multi-agent interviews with adaptive questioning and real-time feedback.",
      stack: ["Next.js", "LangChain", "Python"],
    },
    {
      title: "Threshold Platform (REID Lab)",
      desc: "Wearable monitoring + feedback system integrating Pixel Watch + Mantis X3.",
      stack: ["React", "Flask", "AWS RDS"],
    },
    {
      title: "PRM vs RRT Hospital Simulator",
      desc: "Sampling-based planning with dynamic constraints in 2D hospital environments.",
      stack: ["Python", "NumPy", "NetworkX"],
    },
    {
      title: "Hybrid AI for Diabetes Detection",
      desc: "Interpretable ML (Random Forest + fairness metrics + feature importance).",
      stack: ["Streamlit", "scikit-learn"],
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-5xl font-bold mb-4">Anirban Maity</h1>
        <p className="max-w-2xl text-neutral-400 mb-8">
          I build clean, fast UIs and practical AI agents. My work spans
          multi-agent interview coaching, wearable feedback systems, and robotics
          simulations.
        </p>
        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="rounded-xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-900"
            >
              {s.name}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 hover:bg-neutral-900 transition"
            >
              <div className="font-semibold mb-2">{p.title}</div>
              <p className="text-sm text-neutral-400 mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2 text-xs text-neutral-500">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-neutral-800 px-2 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-neutral-900 py-8 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Anirban Maity — Built with Next.js & Tailwind
      </footer>
    </main>
  );
}
