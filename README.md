# Red-
// app/page.tsx
// Single-page landing (English) — 5 sections: Hero, Trust Bar, P.A.S., Social Proof + Pricing, Risk Reversal
// Revenue boosters: Bundling + Decoy + Upsell (Subscription)
// Mobile responsive via Tailwind

const Check = () => (
  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900">
    ✓
  </span>
);

const StarRow = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2 text-sm text-neutral-700">
    <span className="text-base">★★★★★</span>
    <span className="text-neutral-500">—</span>
    <span className="font-medium text-neutral-800">{label}</span>
  </div>
);

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Sticky header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-neutral-900" aria-hidden />
            <div className="leading-tight">
              <p className="text-sm font-semibold">Red Bull</p>
              <p className="text-xs text-neutral-500">Focus & Energy Packs</p>
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <a
              href="#solution"
              className="hidden rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 sm:inline-flex"
            >
              How it works
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              Choose a pack
            </a>
          </nav>
        </div>
      </header>

      {/* 1) HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-12 sm:pb-16 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700">
                Built for one problem: fatigue during long days & short nights
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Beat the mid-day crash.
                <span className="block text-neutral-600">Stay focused when your schedule doesn’t stop.</span>
              </h1>

              <p className="mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
                For students, athletes, and nightlife lifestyles. Red Bull packs deliver a fast boost and help you
                keep momentum—without overthinking what to buy.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
                >
                  See packs & pricing
                </a>
                <a
                  href="#pas"
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                >
                  Why this solves it
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-3xl border border-neutral-200 bg-white p-4">
                  <p className="text-sm font-semibold">Fast boost</p>
                  <p className="mt-1 text-sm text-neutral-600">When energy drops suddenly</p>
                </div>
                <div className="rounded-3xl border border-neutral-200 bg-white p-4">
                  <p className="text-sm font-semibold">Mental focus</p>
                  <p className="mt-1 text-sm text-neutral-600">Study / work / performance</p>
                </div>
                <div className="rounded-3xl border border-neutral-200 bg-white p-4">
                  <p className="text-sm font-semibold">Lifestyle fit</p>
                  <p className="mt-1 text-sm text-neutral-600">Sports, events, and social nights</p>
                </div>
              </div>
            </div>

            {/* Hero product visual */}
            <div className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">The “Long Day” Kit</p>
                  <p className="mt-1 text-sm text-neutral-600">
                    Designed for fatigue + pressure + non-stop schedules
                  </p>
                </div>
                <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
                  Most chosen
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { title: "Quick energy boost", desc: "When you feel tired and flat" },
                  { title: "Sharper focus", desc: "When you need to lock in" },
                  { title: "Momentum for intense moments", desc: "Training, deadlines, nights out" },
                ].map((x) => (
                  <div key={x.title} className="rounded-3xl bg-neutral-50 p-4">
                    <p className="text-sm font-semibold text-neutral-900">{x.title}</p>
                    <p className="mt-1 text-sm text-neutral-600">{x.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-neutral-200 bg-white p-4">
                <p className="text-xs font-semibold text-neutral-700">What you get</p>
                <ul className="mt-2 space-y-2 text-sm text-neutral-700">
                  <li className="flex items-center gap-2">
                    <Check /> Mix of classic + sugarfree options
                  </li>
                  <li className="flex items-center gap-2">
                    <Check /> Curated for “busy days” and “late nights”
                  </li>
                  <li className="flex items-center gap-2">
                    <Check /> Optional subscription to never run out
                  </li>
                </ul>
              </div>

              <a
                href="#pricing"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Pick your pack
              </a>
              <p className="mt-3 text-center text-xs text-neutral-500">
                Mobile-first • Vercel-ready • One page
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2) TRUST BAR */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold">
              Common moments where fatigue hits (and this helps)
            </p>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-4">
              {["Study sessions", "Work deadlines", "Training days", "Nightlife events"].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold text-neutral-700"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3) P.A.S. */}
      <section id="pas" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Fatigue doesn’t just make you tired — it steals performance.
            </h2>
            <p className="mt-4 text-neutral-700">
              Long days and short nights create a predictable pattern: energy drops, focus slips, and you feel pressure
              to “push through.” That’s when you need a fast, reliable boost—without wasting time comparing brands.
            </p>
          </div>

          <div id="solution" className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[28px] border border-neutral-200 bg-white p-6">
              <p className="text-sm font-semibold text-neutral-900">P — Problem</p>
              <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                <li className="flex gap-3">
                  <span className="mt-0.5">•</span>
                  <span>Energy crash during the day (fatigue + low drive)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5">•</span>
                  <span>Stress and pressure to perform (study, work, sport)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5">•</span>
                  <span>Too many choices and competing brands → decision fatigue</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-neutral-200 bg-neutral-900 p-6 text-white">
              <p className="text-sm font-semibold">A — Agitate</p>
              <p className="mt-4 text-sm leading-relaxed text-white/90">
                When you’re tired, you procrastinate, lose consistency, and feel behind. You may even skip training,
                underperform on tasks, or miss out on social moments (FOMO). The cost isn’t just “being sleepy”—it’s
                losing momentum and confidence.
              </p>
              <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm">
                <p className="font-semibold">What people say in that moment:</p>
                <p className="mt-1 text-white/90">“I need something now. I can’t afford to crash.”</p>
              </div>
            </div>

            <div className="rounded-[28px] border border-neutral-200 bg-white p-6">
              <p className="text-sm font-semibold text-neutral-900">S — Solution</p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                Curated packs built around one job-to-be-done:{" "}
                <span className="font-semibold text-neutral-900">
                  restore energy fast and keep focus through intense moments.
                </span>
              </p>
              <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                <li className="flex items-center gap-3">
                  <Check /> Fast boost when fatigue hits
                </li>
                <li className="flex items-center gap-3">
                  <Check /> Focus-friendly options (including sugarfree)
                </li>
                <li className="flex items-center gap-3">
                  <Check /> Subscription upsell so you never run out
                </li>
              </ul>
              <a
                href="#pricing"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Compare packs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4) SOCIAL PROOF + PRICING */}
      <section id="pricing" className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Social proof */}
            <div className="rounded-[28px] border border-neutral-200 bg-white p-6">
              <h3 className="text-2xl font-semibold tracking-tight">Social proof (what your peers value)</h3>
              <p className="mt-3 text-neutral-700">
                People like “Gauthier” (active, competitive, always moving) want quick energy, focus, and a lifestyle
                they feel proud to be part of.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-3xl bg-neutral-50 p-5">
                  <StarRow label="“Perfect for long study days — I stay locked in.”" />
                  <p className="mt-2 text-sm text-neutral-600">Student • Exam season</p>
                </div>
                <div className="rounded-3xl bg-neutral-50 p-5">
                  <StarRow label="“Helps me push through training when I’m drained.”" />
                  <p className="mt-2 text-sm text-neutral-600">Athlete • Evening workouts</p>
                </div>
                <div className="rounded-3xl bg-neutral-50 p-5">
                  <StarRow label="“Keeps the night going without losing the vibe.”" />
                  <p className="mt-2 text-sm text-neutral-600">Nightlife • Events</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { k: "Energy", v: "Fast boost" },
                  { k: "Focus", v: "Sharper attention" },
                  { k: "Lifestyle", v: "Events & community" },
                ].map((x) => (
                  <div key={x.k} className="rounded-3xl border border-neutral-200 bg-white p-4">
                    <p className="text-xs font-semibold text-neutral-500">{x.k}</p>
                    <p className="mt-1 text-sm font-semibold">{x.v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing (Decoy + Bundle + Upsell subscription) */}
            <div className="space-y-4">
              <div className="rounded-[28px] border border-neutral-200 bg-white p-6">
                <h3 className="text-2xl font-semibold tracking-tight">Choose your pack</h3>
                <p className="mt-3 text-neutral-700">
                  Pricing uses a simple comparison to reduce choice overload and highlight the best value.
                </p>
              </div>

              <div className="grid gap-4 lg:grid-cols-3">
                {/* Decoy */}
                <div className="rounded-[28px] border border-neutral-200 bg-white p-6">
                  <p className="text-sm font-semibold text-neutral-900">Starter (Decoy)</p>
                  <p className="mt-1 text-sm text-neutral-600">For “just in case” days</p>
                  <p className="mt-4 text-3xl font-semibold">€8</p>
                  <p className="mt-1 text-xs text-neutral-500">One-time</p>
                  <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                    <li className="flex items-center gap-2">
                      <Check /> 2 cans (classic)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check /> Basic boost
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-400">
                        —
                      </span>
                      No sugarfree option
                    </li>
                  </ul>
                  <a
                    href="#cta"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold hover:bg-neutral-50"
                  >
                    Choose Starter
                  </a>
                </div>

                {/* Best value bundle */}
                <div className="relative rounded-[28px] border border-neutral-200 bg-neutral-900 p-6 text-white">
                  <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-900">
                    Best value (Bundle)
                  </span>
                  <p className="text-sm font-semibold">Long Day Bundle</p>
                  <p className="mt-1 text-sm text-white/80">For fatigue + focus + busy schedules</p>
                  <p className="mt-4 text-3xl font-semibold">€16</p>
                  <p className="mt-1 text-xs text-white/70">One-time</p>
                  <ul className="mt-4 space-y-2 text-sm text-white/90">
                    <li className="flex items-center gap-2">
                      <Check /> 4 cans (mix classic + sugarfree)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check /> Covers 2–3 intense days
                    </li>
                    <li className="flex items-center gap-2">
                      <Check /> Reduces “brand comparison” stress
                    </li>
                  </ul>
                  <a
                    href="#cta"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-100"
                  >
                    Choose Bundle
                  </a>
                  <p className="mt-3 text-xs text-white/70">
                    Most people pick this after comparing options.
                  </p>
                </div>

                {/* Upsell */}
                <div className="rounded-[28px] border border-neutral-200 bg-white p-6">
                  <p className="text-sm font-semibold text-neutral-900">Monthly Subscription (Upsell)</p>
                  <p className="mt-1 text-sm text-neutral-600">Never run out again</p>
                  <p className="mt-4 text-3xl font-semibold">€29</p>
                  <p className="mt-1 text-xs text-neutral-500">Per month • Cancel anytime</p>
                  <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                    <li className="flex items-center gap-2">
                      <Check /> 8 cans/month (mix options)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check /> “Auto-solve” fatigue moments
                    </li>
                    <li className="flex items-center gap-2">
                      <Check /> Priority perks for events (monthly)
                    </li>
                  </ul>
                  <a
                    href="#cta"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
                  >
                    Start Subscription
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-neutral-200 bg-white p-6">
                <p className="text-sm font-semibold">Why these options?</p>
                <p className="mt-2 text-sm text-neutral-700">
                  We reduce choice overload (too many brands) by offering a clear comparison. The bundle is optimized
                  for the main job: <span className="font-semibold text-neutral-900">avoid the crash + stay focused</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) RISK REVERSAL */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Try it with zero stress.
              </h3>
              <p className="mt-4 text-neutral-700">
                We know people worry about “is it worth it?”, “health concerns”, and “wasting money”. So we remove the
                risk and make the first step easy.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-sm font-semibold">7-day pack guarantee</p>
                  <p className="mt-2 text-sm text-neutral-700">
                    If you don’t feel it helped with your fatigue moments, we’ll refund the pack.
                  </p>
                </div>
                <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-sm font-semibold">Cancel subscription anytime</p>
                  <p className="mt-2 text-sm text-neutral-700">
                    No lock-in. Pause or stop whenever your schedule changes.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[28px] border border-neutral-200 bg-white p-6">
                <p className="text-sm font-semibold">Clarity note</p>
                <p className="mt-2 text-sm text-neutral-700">
                  Choose classic or sugarfree based on your preference. The pack removes the “confusing differences”
                  pain by curating for you.
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <div id="cta" className="rounded-[28px] border border-neutral-200 bg-neutral-900 p-6 text-white">
              <p className="text-sm font-semibold text-white/90">Ready to stop the crash?</p>
              <h4 className="mt-2 text-2xl font-semibold">Pick a pack and keep your momentum.</h4>
              <p className="mt-3 text-sm text-white/80">
                Optimized for the single problem:{" "}
                <span className="font-semibold text-white">fatigue during long days & short nights.</span>
              </p>

              <ul className="mt-6 space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-3">
                  <Check /> Fast boost when energy drops
                </li>
                <li className="flex items-center gap-3">
                  <Check /> Focus-friendly options included
                </li>
                <li className="flex items-center gap-3">
                  <Check /> Clear pricing to reduce choice overload
                </li>
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pricing"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-100"
                >
                  Go to pricing
                </a>
                <a
                  href="#pas"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
                >
                  Review solution
                </a>
              </div>

              <p className="mt-4 text-xs text-white/70">
                Tip for your midterm: mention decoy + bundling + risk reversal + mobile-first execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-xs text-neutral-500">
          Educational landing page demo for midterm • Next.js + Tailwind • Deploy on Vercel via GitHub
        </div>
      </footer>
    </main>
  );
}
