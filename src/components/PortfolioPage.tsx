"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, skills, timeline, testimonials } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export default function PortfolioPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-chip]", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.from("[data-hero-title]", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power4.out"
      });

      gsap.from("[data-hero-copy], [data-hero-cta]", {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        delay: 0.3,
        ease: "power2.out"
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((section) => {
        gsap.from(section, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%"
          }
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-skill-bar]").forEach((bar) => {
        const target = Number(bar.dataset.skillBar || 0);
        gsap.to(bar, {
          width: `${target}%`,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%"
          }
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen bg-[#05070c] text-slate-100 selection:bg-magma/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-mesh" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070c]/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.22em] text-neon">DevStation</a>
          <ul className="hidden gap-8 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-neon" href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-20 pt-16 md:gap-28 md:pt-24">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-studio-900/70 via-[#0e1220]/80 to-[#1c0f12]/70 p-8 md:p-12" data-reveal>
          <span data-hero-chip className="inline-flex rounded-full border border-neon/40 bg-neon/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-neon">
            Game Developer Portfolio
          </span>
          <h1 data-hero-title className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Crafting high-impact gameplay systems that feel cinematic, responsive, and unforgettable.
          </h1>
          <p data-hero-copy className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            I build immersive player experiences from prototype to production, blending code architecture, game feel, and live-ops scalability for PC, console, and mobile titles.
          </p>
          <div data-hero-cta className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-magma px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
              View Projects
            </a>
            <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-neon/50 hover:text-neon">
              Hire Me
            </a>
          </div>
        </section>

        <section id="about" data-reveal className="grid gap-8 md:grid-cols-[1.2fr,0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-magma">About</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">I specialize in gameplay depth with production reliability.</h2>
            <p className="mt-5 text-slate-300">
              Over 6 years, I have shipped arcade, RPG, and horror mechanics with an emphasis on smooth controls, performant systems, and clear handoff for designers.
              My workflow combines technical rigor with rapid experimentation, so teams can stay creative while maintaining quality.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Core Stack</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>Unreal Engine 5, Unity, Godot</li>
              <li>C++, C#, Blueprints, GDScript</li>
              <li>Multiplayer, AI behavior, optimization</li>
              <li>CI/CD pipelines and tooling automation</li>
            </ul>
          </div>
        </section>

        <section id="projects" data-reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-magma">Featured Work</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Projects that shipped and scaled.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-neon/40 hover:bg-white/[0.06]">
                <p className="text-xs uppercase tracking-[0.18em] text-studio-200">{project.genre}</p>
                <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                <p className="mt-1 text-sm text-neon">{project.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">{project.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <li key={tag} className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">{tag}</li>
                  ))}
                </ul>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-magma">{project.metrics}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" data-reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-magma">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Hands-on technical strengths.</h2>
          <div className="mt-8 space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            {skills.map((skill) => (
              <div key={skill.label}>
                <div className="mb-2 flex justify-between text-sm">
                  <span>{skill.label}</span>
                  <span className="text-slate-400">{skill.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div data-skill-bar={skill.value} className="h-2 w-0 rounded-full bg-gradient-to-r from-studio-400 to-neon" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" data-reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-magma">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Studio and indie journey.</h2>
          <div className="mt-8 space-y-4">
            {timeline.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-studio-200">{item.period}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section data-reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-magma">Testimonials</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">What collaborators say.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.person} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <blockquote className="text-slate-200">"{testimonial.quote}"</blockquote>
                <figcaption className="mt-4 text-sm text-slate-400">
                  {testimonial.person} - {testimonial.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="contact" data-reveal className="rounded-3xl border border-white/10 bg-gradient-to-r from-studio-900/60 via-[#0a1222]/60 to-[#1e0d17]/70 p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-magma">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Let's build your next world-class game.</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Available for full-time roles, contract gameplay engineering, and technical design collaboration.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a className="rounded-full bg-neon px-6 py-3 font-semibold text-[#0b1222] transition hover:-translate-y-0.5" href="mailto:hello@gamedevstation.dev">
              hello@gamedevstation.dev
            </a>
            <a className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-neon/50 hover:text-neon" href="#top">
              Back to Top
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-xs tracking-[0.14em] text-slate-500">
        (c) {new Date().getFullYear()} DevStation - Game Developer Portfolio
      </footer>
    </div>
  );
}
