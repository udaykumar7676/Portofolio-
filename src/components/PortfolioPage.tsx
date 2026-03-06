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

const highlights = [
  "Gameplay systems that scale to production",
  "Strong designer and QA collaboration",
  "Performance-first engineering decisions"
];

const stats = [
  { value: "6+", label: "Years in production" },
  { value: "14", label: "Systems shipped" },
  { value: "60fps", label: "Performance target" }
];

export default function PortfolioPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from("[data-hero-chip]", {
        opacity: 0,
        y: 18,
        duration: 0.55,
        ease: "power2.out"
      });

      gsap.from("[data-hero-title]", {
        opacity: 0,
        y: 26,
        duration: 0.75,
        delay: 0.08,
        ease: "power3.out"
      });

      gsap.from("[data-hero-copy], [data-hero-cta], [data-hero-side]", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.2,
        stagger: 0.08,
        ease: "power2.out"
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 26,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 86%",
            once: true
          }
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-skill-bar]").forEach((bar) => {
        const target = Number(bar.dataset.skillBar || 0);
        gsap.to(bar, {
          width: `${target}%`,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
            once: true
          }
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen bg-[#f5f7fb] text-[#121826] selection:bg-[#0ea5a4]/20 selection:text-[#0d1117]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(14,165,164,0.12),transparent_34%),radial-gradient(circle_at_88%_8%,rgba(244,114,67,0.14),transparent_33%),linear-gradient(180deg,#f8fafc_0%,#eef3f9_50%,#f6f8fc_100%)]" />

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-6">
          <a href="#top" className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">DevStation</a>
          <ul className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-[#0f766e]">{item.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="hidden rounded-full bg-[#111827] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#0f766e] md:inline-flex">
            Start Project
          </a>
        </nav>
        <div className="md:hidden">
          <ul className="no-scrollbar mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 pb-3 text-xs text-slate-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="block whitespace-nowrap rounded-full border border-slate-300 bg-white px-3 py-1.5">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-14 px-5 pb-16 pt-10 md:gap-20 md:px-6 md:pb-20 md:pt-14">
        <section data-reveal className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.45)] md:p-10">
          <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#14b8a6]/12 blur-3xl" />
          <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#f97316]/12 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-end">
            <div>
              <span data-hero-chip className="inline-flex rounded-full border border-[#0f766e]/20 bg-[#0f766e]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0f766e]">
                Senior Gameplay Engineer
              </span>
              <h1 data-hero-title className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-6xl">
                Modern gameplay systems that feel incredible and ship reliably.
              </h1>
              <p data-hero-copy className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
                I design and build production-ready gameplay architecture for PC, console, and mobile. The focus is simple: better player feel, cleaner systems, and faster team iteration.
              </p>
              <div data-hero-cta className="mt-7 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-full bg-[#111827] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f766e]">
                  Explore Work
                </a>
                <a href="#contact" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#0f766e] hover:text-[#0f766e]">
                  Book a Call
                </a>
              </div>
            </div>

            <aside data-hero-side className="rounded-2xl border border-slate-200 bg-[#f9fbff] p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0f766e]">At a Glance</p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-3">
                    <p className="text-lg font-bold text-slate-900 md:text-2xl">{stat.value}</p>
                    <p className="mt-1 text-[10px] leading-tight text-slate-500 md:text-[11px]">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-slate-600">Open to full-time and contract roles focused on gameplay, systems, and technical design.</p>
            </aside>
          </div>
        </section>

        <section id="about" data-reveal className="scroll-mt-28 grid gap-5 lg:grid-cols-[1.2fr,0.8fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f97316]">About</p>
            <h2 className="mt-3 text-2xl font-semibold md:text-4xl">Engineering game feel with production discipline.</h2>
            <p className="mt-4 text-slate-600">
              Over 6 years I have shipped RPG, arcade, and horror features with stable frame-times and clear team workflows. I work at the intersection of design intent and engineering quality.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-[#111827] p-6 text-slate-200 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2dd4bf]">Core Stack</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>Unreal Engine 5, Unity, Godot</li>
              <li>C++, C#, Blueprints, GDScript</li>
              <li>Multiplayer systems, AI behaviors, optimization</li>
              <li>Tooling pipelines and CI/CD integration</li>
            </ul>
          </article>
        </section>

        <section id="projects" data-reveal className="scroll-mt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f97316]">Featured Projects</p>
          <h2 className="mt-3 text-2xl font-semibold md:text-4xl">Unique builds with measurable outcomes.</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#0f766e]/40 hover:shadow-lg ${index === 0 ? "sm:col-span-2 lg:col-span-3" : "lg:col-span-2"}`}
              >
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">{project.genre}</p>
                <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                <p className="mt-1 text-sm font-medium text-[#0f766e]">{project.role}</p>
                <p className="mt-3 text-sm text-slate-600">{project.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <li key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">{tag}</li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#f97316]">{project.metrics}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" data-reveal className="scroll-mt-28 grid gap-5 lg:grid-cols-[1fr,0.85fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f97316]">Skills</p>
            <h2 className="mt-3 text-2xl font-semibold md:text-4xl">Technical confidence, hands-on delivery.</h2>
            <div className="mt-6 space-y-4">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="font-medium text-slate-800">{skill.label}</span>
                    <span className="text-slate-500">{skill.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200">
                    <div data-skill-bar={skill.value} className="h-2 w-0 rounded-full bg-gradient-to-r from-[#0f766e] to-[#22d3ee]" />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#eef7ff_100%)] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0f766e]">Delivery Focus</p>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <p className="rounded-xl border border-slate-200 bg-white px-4 py-3">Fast iteration loops for designers without sacrificing code quality.</p>
              <p className="rounded-xl border border-slate-200 bg-white px-4 py-3">Performance profiling early to avoid late-stage optimization debt.</p>
              <p className="rounded-xl border border-slate-200 bg-white px-4 py-3">Feature architecture built for maintainability and scaling.</p>
            </div>
          </article>
        </section>

        <section id="experience" data-reveal className="scroll-mt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f97316]">Experience</p>
          <h2 className="mt-3 text-2xl font-semibold md:text-4xl">Studio and indie timeline.</h2>
          <div className="mt-6 space-y-3 border-l-2 border-slate-200 pl-5">
            {timeline.map((item) => (
              <article key={item.title} className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="absolute -left-[1.72rem] top-7 h-3 w-3 rounded-full bg-[#0f766e]" />
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">{item.period}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f97316]">Testimonials</p>
          <h2 className="mt-3 text-2xl font-semibold md:text-4xl">What collaborators say.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.person} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <blockquote className="text-slate-700">
                  <span className="text-[#f97316]">&quot;</span>
                  {testimonial.quote}
                  <span className="text-[#f97316]">&quot;</span>
                </blockquote>
                <figcaption className="mt-4 text-sm text-slate-500">
                  {testimonial.person} - {testimonial.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="contact" data-reveal className="scroll-mt-28 rounded-[2rem] border border-slate-900 bg-[#111827] p-7 text-white md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#22d3ee]">Contact</p>
              <h2 className="mt-3 text-2xl font-semibold md:text-4xl">Let&apos;s build your next world-class game.</h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                Available for full-time roles, contract gameplay engineering, and technical design collaboration.
              </p>
            </div>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#67e8f9]">
              Available Now
            </span>
          </div>
          <div className="mt-7 flex flex-wrap gap-3 text-sm">
            <a className="rounded-full bg-white px-6 py-3 font-semibold text-[#111827] transition hover:bg-[#ccfbf1]" href="mailto:hello@gamedevstation.dev">
              hello@gamedevstation.dev
            </a>
            <a className="rounded-full border border-white/30 px-6 py-3 font-semibold transition hover:border-[#67e8f9] hover:text-[#67e8f9]" href="#top">
              Back to Top
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-xs tracking-[0.12em] text-slate-500">
        (c) {new Date().getFullYear()} DevStation - Game Developer Portfolio
      </footer>
    </div>
  );
}
