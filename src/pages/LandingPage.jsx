import { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AlertTriangle, Clock, FileText } from 'lucide-react'

const workflowSteps = [
  { title: 'Worker logs', desc: 'Speaks in Tamil. Voice captured by Sarvam AI.' },
  { title: 'AI processes', desc: 'BERT extracts signals. XGBoost scores risk on-device.' },
  { title: 'Profile updates', desc: '5-domain child profile updated automatically.' },
  { title: 'Parent notified', desc: 'USSD or WhatsApp update in Tamil. Any phone.' },
  { title: 'Supervisor sees', desc: 'District dashboard updated. Hotspots detected.' },
]

const aiModels = [
  'Sarvam AI — Tamil STT',
  'Whisper Tiny — Offline STT',
  'BERT + spaCy — Signal Extraction',
  'XGBoost → TF Lite — Risk Scoring',
  'Isolation Forest — Convergence',
  'ChromaDB + RAG — Guidelines',
  'Gemma-2B — On-device LLM',
  'DBSCAN — Hotspot Detection',
]

const featurePills = ['Offline First', 'Voice AI Tamil', '158M Children', 'Government Ready']

const workerFeatures = [
  'Voice logging in Tamil',
  'AI morning digest',
  'SAM/MAM classifier',
  'QR attendance',
  'Auto-reports',
]

const parentFeatures = [
  'Domain progress',
  'Activity tips',
  'AI alerts',
  'Worker notes',
  'USSD access',
]

const governmentFeatures = [
  'Risk heatmap',
  'Referral pipeline',
  'Centre analytics',
  'Worker performance',
  'Export',
]

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-[#051F20]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">THULI</span>
            <span className="ml-2 text-sm text-[#8EB69B]">துளி</span>
          </div>
          <div className="flex items-center gap-8">
            <button type="button" onClick={() => scrollToSection('features')} className="text-sm font-medium text-[#8EB69B] transition-colors hover:text-white">
              Features
            </button>
            <button type="button" onClick={() => scrollToSection('workflow')} className="text-sm font-medium text-[#8EB69B] transition-colors hover:text-white">
              How it Works
            </button>
            <button type="button" onClick={() => scrollToSection('impact')} className="text-sm font-medium text-[#8EB69B] transition-colors hover:text-white">
              Impact
            </button>
            <Link
              to="/login"
              className="rounded-lg border border-[#8EB69B] px-4 py-2 text-sm text-[#8EB69B] transition-colors hover:bg-[#163832]"
            >
              Login
            </Link>
            <Link
              to="/dashboard"
              className="rounded-lg bg-[#235347] px-4 py-2 text-sm text-white transition-colors hover:bg-[#163832]"
            >
              Enter Platform
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-screen items-center justify-center bg-[#051F20] pt-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mb-8 inline-flex items-center rounded-full border border-[#235347]/40 bg-[#163832] px-4 py-2 text-xs font-medium text-[#8EB69B]">
            India&apos;s First AI-Native Anganwadi Platform
          </span>

          <h1 className="text-8xl font-black leading-none tracking-tight text-white">THULI</h1>
          <p className="mt-2 text-2xl font-light tracking-widest text-[#8EB69B]">துளி</p>
          <p className="mt-6 text-xl font-light text-[#8EB69B]/80">AI-Powered Early Childhood Development Platform</p>
          <p className="mt-3 text-sm font-light italic text-[#8EB69B]/50">
            Because every child begins as a single drop — and no drop should go unseen
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/dashboard"
              className="rounded-xl bg-[#235347] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-[#163832]"
            >
              Explore Dashboard →
            </Link>
            <button
              type="button"
              onClick={() => scrollToSection('workflow')}
              className="rounded-xl border border-[#8EB69B]/40 px-8 py-3 text-sm font-semibold text-[#8EB69B] transition-all hover:border-[#8EB69B]"
            >
              How It Works
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {featurePills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-[#235347]/30 bg-[#163832]/60 px-4 py-2 text-xs text-[#8EB69B]"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section id="impact" className="border-y border-[#235347]/30 bg-[#0B2B26] py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-white">13.9L</div>
            <div className="mt-1 text-sm text-[#8EB69B]">Anganwadi centres</div>
          </div>
          <div>
            <div className="text-4xl font-black text-white">158M</div>
            <div className="mt-1 text-sm text-[#8EB69B]">Children in ICDS</div>
          </div>
          <div>
            <div className="text-4xl font-black text-white">5.8 yrs</div>
            <div className="mt-1 text-sm text-[#8EB69B]">Average diagnosis age in rural India</div>
          </div>
          <div>
            <div className="text-4xl font-black text-white">70%</div>
            <div className="mt-1 text-sm text-[#8EB69B]">Worker time lost to paperwork</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="features" className="bg-[#E8F5EE] px-6 py-24">
        <h2 className="text-center text-4xl font-black text-[#051F20]">Three problems. One root cause.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#235347]">
          THULI solves what no existing system does — simultaneously.
        </p>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-3 gap-6">
          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-8 transition-colors hover:border-[#235347]/50">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#051F20]">
              <Clock size={18} color="white" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-[#051F20]">PS 1.5 — Late Detection</h3>
            <p className="text-sm leading-relaxed text-[#235347]">
              Developmental disorders caught at age 5–6. The optimal intervention window closes at age 3. By the time a
              diagnosis happens, years of support have been lost.
            </p>
          </div>

          <div className="rounded-2xl bg-[#051F20] p-8">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#163832]">
              <FileText size={18} color="white" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-white">PS 1.4 — Paperwork Overload</h3>
            <p className="text-sm leading-relaxed text-[#8EB69B]">
              Workers spend 3–4 hours daily filling 4 paper registers. No smart tools. No AI assistance. Meaningful time
              with children — lost.
            </p>
          </div>

          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-8 transition-colors hover:border-[#235347]/50">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#051F20]">
              <AlertTriangle size={18} color="white" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-[#051F20]">PS 1.3 — No Tracking System</h3>
            <p className="text-sm leading-relaxed text-[#235347]">
              Child development across 5 domains — Physical, Language, Cognitive, Social-Emotional, Self-Care — never
              tracked. Parents receive no guidance.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="workflow" className="bg-white px-6 py-24">
        <h2 className="text-center text-4xl font-black text-[#051F20]">How THULI works</h2>
        <p className="mt-4 text-center text-lg text-[#235347]">One worker action. Three problems solved.</p>

        <div className="mx-auto mt-16 flex max-w-5xl items-start justify-center">
          {workflowSteps.map((step, index) => (
            <Fragment key={step.title}>
              <div className="flex-1 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#235347] text-lg font-black text-white">
                  {index + 1}
                </div>
                <div className="mt-4 text-sm font-bold text-[#051F20]">{step.title}</div>
                <div className="mt-2 text-xs leading-relaxed text-[#235347]">{step.desc}</div>
              </div>
              {index < workflowSteps.length - 1 ? (
                <div className="flex items-center justify-center pt-6 text-2xl text-[#8EB69B]">→</div>
              ) : null}
            </Fragment>
          ))}
        </div>
      </section>

      {/* Three Portals */}
      <section id="portals" className="bg-[#E8F5EE] px-6 py-24">
        <h2 className="text-center text-4xl font-black text-[#051F20]">Built for everyone in the ecosystem</h2>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-3 gap-6">
          <div className="rounded-2xl bg-[#051F20] p-8">
            <h3 className="text-2xl font-black text-white">Worker Portal</h3>
            <p className="mt-1 text-sm text-[#8EB69B]">Meenakshi&apos;s daily tool</p>
            <ul className="mt-6 space-y-2">
              {workerFeatures.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#235347]" />
                  <span className="text-sm text-[#8EB69B]">{item}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => navigate('/worker')}
              className="mt-8 w-full rounded-xl bg-[#235347] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#163832]"
            >
              Enter Worker Portal
            </button>
          </div>

          <div className="rounded-2xl border-2 border-[#163832] bg-white p-8">
            <h3 className="text-2xl font-black text-[#051F20]">Parent Portal</h3>
            <p className="mt-1 text-sm text-[#235347]">Know your child&apos;s growth</p>
            <ul className="mt-6 space-y-2">
              {parentFeatures.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#235347]" />
                  <span className="text-sm text-[#235347]">{item}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => navigate('/parent')}
              className="mt-8 w-full rounded-xl bg-[#163832] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#235347]"
            >
              Enter Parent Portal
            </button>
          </div>

          <div className="rounded-2xl bg-[#163832] p-8">
            <h3 className="text-2xl font-black text-white">Government Portal</h3>
            <p className="mt-1 text-sm text-[#8EB69B]">District-level intelligence</p>
            <ul className="mt-6 space-y-2">
              {governmentFeatures.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#235347]" />
                  <span className="text-sm text-[#8EB69B]">{item}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => navigate('/government')}
              className="mt-8 w-full rounded-xl bg-[#051F20] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0B2B26]"
            >
              Enter Government Portal
            </button>
          </div>
        </div>
      </section>

      {/* AI Stack */}
      <section className="bg-white px-6 py-20">
        <h2 className="text-center text-4xl font-black text-[#051F20]">8 AI models working silently</h2>
        <p className="mt-4 text-center text-[#235347]">Every model has one specific job. None are optional.</p>

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
          {aiModels.map((model) => (
            <span
              key={model}
              className="rounded-full border border-[#8EB69B]/40 bg-[#E8F5EE] px-5 py-2.5 text-sm font-medium text-[#235347] transition-colors hover:border-[#235347]"
            >
              {model}
            </span>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-[#E8F5EE] px-6 py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-2 items-center gap-16">
          <div>
            <div className="font-serif text-8xl leading-none text-[#8EB69B]/30">&ldquo;</div>
            <p className="text-lg italic leading-relaxed text-[#235347]">
              Meenakshi, an Anganwadi worker near Coimbatore, noticed Riya — 20 months old — hadn&apos;t responded to her
              name in three weeks. Hadn&apos;t said a word. She noticed everything.
            </p>
            <p className="mt-4 text-lg italic leading-relaxed text-[#235347]">
              But no system existed to turn what she noticed into action.
            </p>
            <p className="mt-6 text-xl font-bold text-[#051F20]">
              Riya was diagnosed with autism at age 5. Three years after the optimal window had closed.
            </p>
          </div>

          <div className="rounded-2xl bg-[#051F20] p-10">
            <p className="text-sm text-[#8EB69B]">The information existed at the Anganwadi level.</p>
            <p className="mt-3 text-2xl font-black text-white">The system to act on it — did not.</p>
            <p className="mt-4 text-lg text-[#8EB69B]">THULI changes that.</p>
            <div className="mt-8 border-t border-[#235347] pt-8">
              <p className="text-sm text-[#8EB69B]">Every other system identifies delays.</p>
              <p className="mt-2 text-base font-bold text-white">THULI predicts them — and closes the loop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#163832] bg-[#051F20] px-6 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-12">
          <div>
            <div className="text-2xl font-black text-white">THULI</div>
            <div className="text-sm text-[#8EB69B]">துளி</div>
            <p className="mt-3 text-xs leading-relaxed text-[#8EB69B]/60">
              AI-powered early childhood development. Built for India&apos;s 13.9 lakh Anganwadi workers.
            </p>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#8EB69B]">Navigate</div>
            <ul className="space-y-2">
              <li>
                <button type="button" onClick={() => scrollToSection('features')} className="text-sm text-[#8EB69B]/70 transition-colors hover:text-white">
                  Features
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('workflow')} className="text-sm text-[#8EB69B]/70 transition-colors hover:text-white">
                  How it Works
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/worker')} className="text-sm text-[#8EB69B]/70 transition-colors hover:text-white">
                  Worker Portal
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/parent')} className="text-sm text-[#8EB69B]/70 transition-colors hover:text-white">
                  Parent Portal
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/government')} className="text-sm text-[#8EB69B]/70 transition-colors hover:text-white">
                  Government Portal
                </button>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#8EB69B]">Team ZENQ</div>
            <p className="text-sm text-[#8EB69B]/70">Wadhwani AI National Hackathon 2026</p>
            <p className="mt-1 text-xs text-[#8EB69B]/50">Karunya Institute of Technology and Sciences</p>
            <p className="text-xs text-[#8EB69B]/50">Coimbatore, Tamil Nadu</p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl border-t border-[#163832] pt-8 text-center text-xs text-[#8EB69B]/40">
          © 2026 THULI · Empowering India&apos;s children with AI
        </div>
      </footer>
    </div>
  )
}
