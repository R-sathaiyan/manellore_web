"use client";
import { ArrowUpRight, Check, ChevronRight, Cpu, Instagram, Linkedin, MessageCircle, MoveUpRight, Quote, ShieldCheck, Sparkles, Target, Workflow } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { pillars, reasons, team } from "@/data/site";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Process } from "./Process";
import { Contact } from "./Contact";
import { Section } from "./Section";
import { Reveal } from "./Motion";

export function Site() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <About />
        <Services />
        <OnePartner />
        <Process />
        <WhyUs />
        <Story />
        <Team />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Trust() {
  return (
    <section className="border-y border-[#26303D] bg-[#0F141D]/70 px-5 py-5 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-2xl border border-[#26303D] bg-[#26303D] sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <Reveal key={p.label} delay={i * 0.05} className="bg-[#0F141D] p-5">
            <div className="text-sm font-extrabold">{p.label}</div>
            <div className="mt-1 text-xs leading-5 text-[#9AA4B2]">{p.detail}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="ABOUT MANELLORE" title="A Dream That Finally Has a Beginning.">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <Reveal>
          <p className="max-w-2xl text-xl leading-9 text-[#C6CDD6] sm:text-2xl">
            We believe good technology does not have to be complicated, oversized or out of reach. <span className="text-white">It has to solve the right problem.</span>
          </p>
          <p className="mt-6 max-w-xl leading-7 text-[#9AA4B2]">
            Manellore Groups is built around a simple idea: bring practical technology thinking to businesses and people who need outcomes, not buzzwords. Start with the need, choose what fits, and build something useful.
          </p>
          <button onClick={() => document.getElementById("why-us")?.scrollIntoView({ behavior: "smooth" })} className="mt-8 flex items-center gap-2 text-sm font-extrabold">
            Why this approach <ChevronRight size={16} className="text-[#19D3FF]" />
          </button>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-square max-w-md justify-self-center rounded-[32px] border border-[#26303D] bg-[#0F141D] p-6">
            <div className="absolute inset-6 rounded-[25px] border border-[#26303D]" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="grid size-32 place-items-center rounded-[32px] bg-[#151B26] shadow-[0_0_80px_rgba(139,92,246,.16)] ring-1 ring-white/10">
                <Target size={38} className="text-[#8B5CF6]" />
              </div>
            </div>
            <div className="absolute left-7 top-7 rounded-xl border border-[#26303D] bg-[#151B26] px-3 py-2 text-[10px] font-extrabold tracking-widest text-[#9AA4B2]">NEED</div>
            <div className="absolute bottom-7 right-7 rounded-xl border border-[#26303D] bg-[#151B26] px-3 py-2 text-[10px] font-extrabold tracking-widest text-[#9AA4B2]">OUTCOME</div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function OnePartner() {
  return (
    <Section id="one-partner" eyebrow="ONE PARTNER SYSTEM" title="Software. Hardware. Support. One connected pipeline." muted>
      <div className="relative grid gap-4 md:grid-cols-3">
        <div className="absolute left-[16%] right-[16%] top-1/2 hidden h-px bg-gradient-to-r from-[#287BFF]/0 via-[#287BFF]/60 to-[#FF8A3D]/0 md:block" />
        {[
          ["Software", "Build the digital layer", Workflow, "#287BFF"],
          ["Hardware", "Enable the physical layer", Cpu, "#19D3FF"],
          ["Support", "Keep the whole system moving", ShieldCheck, "#FF8A3D"],
        ].map(([t, d, I, c], i) => {
          const Icon = I as typeof Workflow;
          return (
            <Reveal key={String(t)} delay={i * 0.08}>
              <motion.div whileHover={{ y: -6 }} className="gradient-border relative rounded-3xl bg-[#151B26] p-7">
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-white/[.04]" style={{ color: String(c) }}>
                      <Icon size={23} />
                    </span>
                    <span className="text-xs font-bold text-[#697585]">0{i + 1}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-extrabold">{String(t)}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#9AA4B2]">{String(d)}</p>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function WhyUs() {
  return (
    <Section id="why-us" eyebrow="WHY CHOOSE US" title="Less friction. More useful technology.">
      <div className="grid gap-3 sm:grid-cols-2">
        {reasons.map(([n, t, d], i) => (
          <Reveal key={n} delay={i * 0.06}>
            <motion.div whileHover={{ y: -5 }} className="group gradient-border relative overflow-hidden rounded-3xl bg-[#151B26] p-7">
              <div className="flex justify-between">
                <span className="text-xs font-extrabold text-[#19D3FF]">{n}</span>
                <MoveUpRight size={17} className="text-[#697585] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
              </div>
              <h3 className="mt-12 text-xl font-extrabold">{t}</h3>
              <p className="mt-2 max-w-lg text-sm leading-6 text-[#9AA4B2]">{d}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-18, 52]);
  const milestones = [
    { label: "IDEA", detail: "Seed idea" },
    { label: "CLIENT", detail: "First client" },
    { label: "PROOF", detail: "Real traction" },
    { label: "VISION", detail: "Long-term path" },
  ];

  return (
    <section id="story" ref={ref} className="relative overflow-hidden border-y border-[#26303D] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="absolute inset-0 bg-[#0F141D]/60" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <Reveal>
            <div className="text-xs font-extrabold tracking-[.2em] text-[#FF8A3D]">STARTUP STORY</div>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-.04em] sm:text-6xl">This is just the beginning.</h2>
            <p className="mt-5 max-w-md leading-7 text-[#9AA4B2]">
              Small beginning. Big vision. We are building the capability to become a dependable technology partner—one useful solution at a time.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[28px] border border-[#26303D] bg-[#080B12] p-5 sm:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(25,211,255,.08),transparent_45%)]" />
              <motion.div style={{ x }} className="relative">
                <div className="relative flex items-center justify-between gap-3 sm:gap-5">
                  <div className="absolute left-4 right-4 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-[#287BFF]/0 via-[#19D3FF]/80 to-[#FF8A3D]/0 sm:block" />
                  <div className="relative z-10 flex w-full items-center justify-between gap-2 sm:gap-4">
                    {milestones.map((m, i) => (
                      <div key={m.label} className="flex flex-1 flex-col items-center text-center">
                        <div className={`grid size-16 place-items-center rounded-2xl border text-[10px] font-extrabold tracking-[.18em] ${i % 2 === 0 ? "border-[#19D3FF]/40 bg-[#0E1B2A] text-[#D5F7FF]" : "border-[#E8A6B8]/40 bg-[#171326] text-[#FEE7F3]"}`}>
                          <span>{m.label}</span>
                        </div>
                        <div className="mt-3 text-[10px] font-semibold uppercase tracking-[.18em] text-[#697585]">{m.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="relative mt-6 flex items-center justify-between rounded-2xl border border-[#26303D] bg-[#101820]/80 px-4 py-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#9AA4B2]">
                <span>Progress is the product</span>
                <span className="text-[#19D3FF]">Momentum</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <Section id="team" eyebrow="LEADERSHIP" title="The person behind the beginning.">
      <div className="grid max-w-md gap-4">
        {team.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.07}>
            <motion.article whileHover={{ y: -7 }} className="group gradient-border overflow-hidden rounded-3xl bg-[#151B26]">
              <div className="relative aspect-[1.05/1] overflow-hidden bg-[#0F141D]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(232,166,184,.25),transparent_35%),radial-gradient(circle_at_75%_70%,rgba(216,180,226,.2),transparent_38%)]" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid size-32 place-items-center rounded-full border border-white/10 bg-white/[.05] text-4xl font-extrabold tracking-tight text-white shadow-[0_0_70px_rgba(232,166,184,.14)]">
                    {p.initials}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-[#080B12]/70 px-3 py-1 text-[9px] font-bold tracking-widest text-[#9AA4B2] backdrop-blur">
                  FOUNDER · {p.initials}
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-extrabold tracking-widest text-[#B9E3D3]">{p.role.toUpperCase()}</div>
                <h3 className="mt-2 text-lg font-extrabold">{p.name}</h3>
                <a href={`mailto:${p.email}`} className="mt-4 inline-flex text-sm font-semibold text-[#E8A6B8] transition hover:text-white">
                  {p.email}
                </a>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Vision() {
  return (
    <section id="vision" className="relative overflow-hidden px-5 py-28 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(40,123,255,.1),transparent_35%)]" />
      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <Sparkles className="mx-auto text-[#19D3FF]" size={22} />
          <h2 className="mt-5 text-5xl font-extrabold tracking-[-.05em] sm:text-7xl">
            Built Today.<br />
            <span className="gradient-text">Ready for Tomorrow.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#9AA4B2]">
            The ambition is bigger than a single project: build a technology partner that keeps getting more useful as your world changes.
          </p>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#26303D] bg-white/[.04] px-5 py-3 text-sm font-extrabold transition hover:border-[#287BFF]/60 hover:bg-[#287BFF]/10">
            Begin the journey <ArrowUpRight size={16} />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#26303D] bg-[#0F141D]/60 px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 font-extrabold">
              <span className="grid size-9 place-items-center rounded-xl border border-white/10">
                <span className="size-4 rotate-45 rounded-md border border-white/60" />
              </span>
              Manellore Groups
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#9AA4B2]">
              Practical technology solutions for the problems worth solving.
            </p>
          </div>

          <div>
            <div className="text-xs font-extrabold tracking-widest text-[#697585]">NAVIGATE</div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold text-[#9AA4B2]">
              {[
                "About",
                "Services",
                "Process",
                "Why Us",
                "Team",
                "Contact",
              ].map((n) => (
                <button
                  key={n}
                  onClick={() => document.getElementById(n.toLowerCase().replace(" ", "-"))?.scrollIntoView({ behavior: "smooth" })}
                  className="text-left transition hover:text-white"
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-extrabold tracking-widest text-[#697585]">CONNECT</div>
            <div className="mt-4 flex gap-2">
              <Social icon={Linkedin} label="LinkedIn" />
              <Social icon={Instagram} label="Instagram" />
              <Social icon={MessageCircle} label="WhatsApp" />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-[#26303D] pt-6 text-xs text-[#697585] sm:flex-row">
          <span>© 2026 Manellore Groups. All rights reserved.</span>
          <span>Technology · Practicality · Momentum</span>
        </div>

        <div className="mt-3 border-t border-[#26303D]/80 pt-4 text-center text-[11px] text-[#8A93A3]">
          <span className="mr-2 font-semibold uppercase tracking-[0.18em] text-[#9AA4B2]">Developer Info</span>
          <span>Sathaiyan • sathaiyan150@gmail.com • 8438885033</span>
        </div>
      </div>
    </footer>
  );
}

function Social({ icon: Icon, label }: { icon: typeof Linkedin; label: string }) {
  return (
    <button
      aria-label={label}
      title={`${label} — link to be configured`}
      className="grid size-10 place-items-center rounded-xl border border-[#26303D] bg-[#151B26] text-[#9AA4B2] transition hover:-translate-y-1 hover:border-[#287BFF]/50 hover:text-white"
    >
      <Icon size={17} />
    </button>
  );
}
