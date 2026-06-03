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
  'Sarvam AI',
  'Whisper Tiny',
  'TF Lite',
  'Gemma 2B',
  'Claude API',
  'ChromaDB',
  'XGBoost',
  'BERT + spaCy',
  'DBSCAN',
]

const featurePills = ['Works offline', 'Voice in Tamil', 'Any Android phone', 'No extra steps']

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
            <span className="ml-2 text-base text-[#8EB69B]">துளி</span>
          </div>
          <div className="flex items-center gap-8">
            <button type="button" onClick={() => scrollToSection('features')} className="text-base font-medium text-[#8EB69B] transition-colors hover:text-white">
              Features
            </button>
            <button type="button" onClick={() => scrollToSection('workflow')} className="text-base font-medium text-[#8EB69B] transition-colors hover:text-white">
              How it Works
            </button>
            <button type="button" onClick={() => scrollToSection('impact')} className="text-base font-medium text-[#8EB69B] transition-colors hover:text-white">
              Impact
            </button>
            <Link
              to="/login"
              className="rounded-lg border border-[#8EB69B] px-4 py-2 text-base text-[#8EB69B] transition-colors hover:bg-[#163832]"
            >
              Login
            </Link>
            <Link
              to="/dashboard"
              className="rounded-lg bg-[#235347] px-4 py-2 text-base text-white transition-colors hover:bg-[#163832]"
            >
              Try the Demo
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-screen items-center justify-center bg-[#051F20] pt-16 pb-12">
        <div className="mx-auto max-w-3xl px-6 text-center">

          {/* Droplet shape with THULI inside */}
          <div
            style={{
              clipPath: 'polygon(50% 0%, 85% 15%, 100% 50%, 85% 80%, 50% 100%, 15% 80%, 0% 50%, 15% 15%)',
              background: 'rgba(142, 182, 155, 0.12)',
              width: '250px',
              height: '310px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 44px auto',
            }}
          >
            <div
              style={{
                clipPath: 'polygon(50% 0%, 85% 15%, 100% 50%, 85% 80%, 50% 100%, 15% 80%, 0% 50%, 15% 15%)',
                background: 'linear-gradient(160deg, #235347 0%, #163832 50%, #0B2B26 100%)',
                width: '220px',
                height: '275px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '3rem', fontWeight: '900', color: '#FBE4D8', letterSpacing: '-0.02em', lineHeight: '1' }}>
                THULI
              </span>
              <span style={{ display: 'block', width: '56px', height: '1px', background: '#8EB69B', opacity: '0.6', margin: '12px auto' }} />
              <span style={{ fontSize: '1.5rem', fontWeight: '300', color: '#8EB69B', letterSpacing: '0.18em' }}>
                துளி
              </span>
            </div>
          </div>

          {/* Tagline with decorative lines */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span style={{ display: 'inline-block', width: '36px', height: '1px', background: '#235347' }} />
            <span className="text-[#8EB69B] text-lg font-light italic tracking-wide">
              Because every child begins as a single drop
            </span>
            <span style={{ display: 'inline-block', width: '36px', height: '1px', background: '#235347' }} />
          </div>

          {/* Main description */}
          <p className="text-white text-2xl font-semibold leading-snug">
            AI-Powered Early Childhood Development Platform
          </p>
          <p className="text-[#8EB69B] text-lg font-light mt-3">
            Built for India&apos;s 13.9 lakh Anganwadi workers.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/dashboard"
              className="rounded-xl bg-[#235347] px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#163832]"
            >
              See the Dashboard →
            </Link>
            <button
              type="button"
              onClick={() => scrollToSection('workflow')}
              className="rounded-xl border border-[#8EB69B]/40 px-8 py-3.5 text-base font-semibold text-[#8EB69B] transition-all hover:border-[#8EB69B]"
            >
              How it works
            </button>
          </div>

          {/* Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {featurePills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-[#235347]/30 bg-[#163832]/60 px-5 py-2.5 text-sm text-[#8EB69B]"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section id="impact" className="border-y border-[#235347]/30 bg-[#0B2B26] py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-black text-white">35+</div>
            <div className="mt-2 text-base text-[#8EB69B]">children per worker daily</div>
          </div>
          <div>
            <div className="text-5xl font-black text-white">4 hrs</div>
            <div className="mt-2 text-base text-[#8EB69B]">paperwork every morning</div>
          </div>
          <div>
            <div className="text-5xl font-black text-white">Age 3</div>
            <div className="mt-2 text-base text-[#8EB69B]">when early support matters most</div>
          </div>
          <div>
            <div className="text-5xl font-black text-white">0</div>
            <div className="mt-2 text-base text-[#8EB69B]">internet needed for core features</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="features" className="bg-[#E8F5EE] px-6 py-24">
        <h2 className="text-center text-5xl font-black text-[#051F20]">The gap no one talks about</h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-xl text-[#235347]">
          India has 13.9 lakh Anganwadis. The worker notices everything. The system records nothing.
        </p>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-3 gap-6">
          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-8 transition-colors hover:border-[#235347]/50">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#051F20]">
              <Clock size={20} color="white" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#051F20]">Too Late, Every Time</h3>
            <p className="text-base leading-relaxed text-[#235347]">
              Delays are often spotted only when a child is already 5 or 6. By then, the years when small supports make
              the biggest difference have already passed.
            </p>
          </div>

          <div className="rounded-2xl bg-[#051F20] p-8">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#163832]">
              <FileText size={20} color="white" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">Buried in Paperwork</h3>
            <p className="text-base leading-relaxed text-[#8EB69B]">
              Workers spend hours each morning filling registers by hand. There is no smart tool, no voice help, and
              less time left for the children who need them most.
            </p>
          </div>

          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-8 transition-colors hover:border-[#235347]/50">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#051F20]">
              <AlertTriangle size={20} color="white" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#051F20]">Invisible Development</h3>
            <p className="text-base leading-relaxed text-[#235347]">
              A child&apos;s growth across language, movement, learning, emotions, and self-care is rarely tracked in one
              place. Parents are left without guidance. Concerns disappear into notebooks.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="workflow" className="bg-white px-6 py-24">
        <h2 className="text-center text-5xl font-black text-[#051F20]">One observation. Everything updates.</h2>
        <p className="mt-5 text-center text-xl text-[#235347]">
          The worker speaks. THULI listens. Three problems solved in one sentence.
        </p>

        <div className="mx-auto mt-16 flex max-w-5xl items-start justify-center">
          {workflowSteps.map((step, index) => (
            <Fragment key={step.title}>
              <div className="flex-1 text-center">
                <div className="mx-auto flex h-13 w-13 items-center justify-center rounded-full bg-[#235347] text-lg font-black text-white"
                  style={{ width: '52px', height: '52px' }}>
                  {index + 1}
                </div>
                <div className="mt-4 text-base font-bold text-[#051F20]">{step.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-[#235347]">{step.desc}</div>
              </div>
              {index < workflowSteps.length - 1 ? (
                <div className="flex items-center justify-center pt-5 text-2xl text-[#8EB69B]">→</div>
              ) : null}
            </Fragment>
          ))}
        </div>
      </section>

      {/* Three Portals */}
      <section id="portals" className="bg-[#E8F5EE] px-6 py-24">
        <h2 className="text-center text-5xl font-black text-[#051F20]">Built for everyone who cares for a child</h2>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-3 gap-6">
          <div className="flex flex-col rounded-2xl bg-[#051F20] p-8">
            <h3 className="text-2xl font-black text-white">Worker Portal</h3>
            <p className="mt-4 flex-1 text-base leading-relaxed text-[#8EB69B]">
              The daily AI assistant for the Anganwadi worker. Voice-first. Offline. Tamil.
            </p>
            <button
              type="button"
              onClick={() => navigate('/worker')}
              className="mt-8 w-full rounded-xl bg-[#235347] py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#163832]"
            >
              Open →
            </button>
          </div>

          <div className="flex flex-col rounded-2xl border-2 border-[#163832] bg-white p-8">
            <h3 className="text-2xl font-black text-[#051F20]">Parent Portal</h3>
            <p className="mt-4 flex-1 text-base leading-relaxed text-[#235347]">
              See your child&apos;s development week by week. Activities. Alerts. In your language.
            </p>
            <button
              type="button"
              onClick={() => navigate('/parent')}
              className="mt-8 w-full rounded-xl bg-[#163832] py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#235347]"
            >
              Open →
            </button>
          </div>

          <div className="flex flex-col rounded-2xl bg-[#163832] p-8">
            <h3 className="text-2xl font-black text-white">Government Portal</h3>
            <p className="mt-4 flex-1 text-base leading-relaxed text-[#8EB69B]">
              District-level intelligence. Know which blocks need attention before the crisis.
            </p>
            <button
              type="button"
              onClick={() => navigate('/government')}
              className="mt-8 w-full rounded-xl bg-[#051F20] py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#0B2B26]"
            >
              Open →
            </button>
          </div>
        </div>
      </section>

      {/* AI Stack */}
      <section className="bg-white px-6 py-20">
        <h2 className="text-center text-5xl font-black text-[#051F20]">The AI stack behind THULI</h2>
        <p className="mt-5 text-center text-xl text-[#235347]">
          Eight models, each with one job. All running on a basic Android phone.
        </p>

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
          {aiModels.map((model) => (
            <span
              key={model}
              className="rounded-full border border-[#8EB69B]/40 bg-[#E8F5EE] px-5 py-2.5 text-base font-medium text-[#235347] transition-colors hover:border-[#235347]"
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
            <p className="text-xl leading-relaxed text-[#235347]">
              Meenakshi walks into a room of 35 children every morning.
              <br /><br />
              She fills four paper registers. She notices Riya isn&apos;t speaking.
              <br />
              She notices Karthik hasn&apos;t gained weight in two months.
              <br />
              She notices Priya cries every single morning.
            </p>
            <p className="mt-8 text-2xl font-bold text-[#051F20]">She notices. But nothing happens.</p>
          </div>

          <div className="rounded-2xl bg-[#051F20] p-10">
            <p className="text-base text-[#8EB69B]">Not because she doesn&apos;t care.</p>
            <p className="mt-4 text-2xl font-black text-white">Because no system exists to act on what she sees.</p>
            <p className="mt-5 text-xl text-[#8EB69B]">THULI is that system.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#163832] bg-[#051F20] px-6 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-12">
          <div>
            <div className="text-2xl font-black text-white">THULI</div>
            <div className="text-base text-[#8EB69B]">துளி</div>
            <p className="mt-3 text-sm leading-relaxed text-[#8EB69B]/60">
              AI-powered early childhood development. Built for India&apos;s 13.9 lakh Anganwadi workers.
            </p>
          </div>

          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#8EB69B]">Navigate</div>
            <ul className="space-y-3">
              <li>
                <button type="button" onClick={() => scrollToSection('features')} className="text-base text-[#8EB69B]/70 transition-colors hover:text-white">
                  Features
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('workflow')} className="text-base text-[#8EB69B]/70 transition-colors hover:text-white">
                  How it Works
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/worker')} className="text-base text-[#8EB69B]/70 transition-colors hover:text-white">
                  Worker Portal
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/parent')} className="text-base text-[#8EB69B]/70 transition-colors hover:text-white">
                  Parent Portal
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/government')} className="text-base text-[#8EB69B]/70 transition-colors hover:text-white">
                  Government Portal
                </button>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#8EB69B]">Team ZENQ</div>
            <p className="text-base text-[#8EB69B]/70">Wadhwani AI National Hackathon 2026</p>
            <p className="mt-1 text-sm text-[#8EB69B]/50">Karunya Institute of Technology and Sciences</p>
            <p className="text-sm text-[#8EB69B]/50">Coimbatore, Tamil Nadu</p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl border-t border-[#163832] pt-8 text-center text-sm text-[#8EB69B]/40">
          © 2026 Team ZENQ · THULI · Empowering India&apos;s children with AI
        </div>
      </footer>
    </div>
  )
}