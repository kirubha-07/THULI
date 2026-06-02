import { Mic, MicOff } from 'lucide-react'
import { useMemo, useState } from 'react'
import { workerChildList } from '../../data/mockData'

function detectDomain(text) {
  const lower = text.toLowerCase()

  if (/(respond|name|say|speak|word|words|call|listen)/.test(lower)) {
    return 'Language'
  }

  if (/(weight|walk|run|eat|feed|grow|height|sick)/.test(lower)) {
    return 'Physical'
  }

  if (/(shape|count|match|solve|sort|puzzle|memory|activity)/.test(lower)) {
    return 'Cognitive'
  }

  if (/(play|group|share|alone|eye contact|smile|cry|fear|fearful|angry|sad)/.test(lower)) {
    return 'Social-Emotional'
  }

  if (/(spoon|cup|dress|toilet|wash|bath|self-care)/.test(lower)) {
    return 'Self-Care'
  }

  return 'Unknown'
}

const domainStyles = {
  Language: 'bg-mint-100 text-forest-700',
  Physical: 'bg-green-50 text-alert-green',
  Cognitive: 'bg-yellow-50 text-alert-yellow',
  'Social-Emotional': 'bg-red-50 text-alert-red',
  'Self-Care': 'bg-mint-100 text-forest-700',
  Unknown: 'bg-mint-100 text-forest-700',
}

export default function QuickLogPanel() {
  const [selectedChild, setSelectedChild] = useState(workerChildList[0]?.id ?? '')
  const [observation, setObservation] = useState('')
  const [recording, setRecording] = useState(false)
  const [aiState, setAiState] = useState('idle')
  const [count, setCount] = useState(0)

  const detectedDomain = useMemo(() => detectDomain(observation), [observation])

  const handleSubmit = () => {
    setCount((current) => current + 1)
    setAiState('analysing')
    setTimeout(() => setAiState('idle'), 2000)
  }

  return (
    <div className="rounded-lg sm:rounded-xl border border-sage/20 bg-white p-3 sm:p-4 md:p-5 shadow-sm">
      <h2 className="text-sm sm:text-base font-semibold text-forest-950">Log an Observation</h2>
      <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
        <select
          value={selectedChild}
          onChange={(event) => setSelectedChild(event.target.value)}
          className="flex-1 sm:flex-none sm:w-48 rounded-lg border border-sage/30 px-2 sm:px-3 py-2 text-xs sm:text-sm text-forest-900 outline-none focus:ring-1 focus:ring-forest-700"
        >
          {workerChildList.map((child) => (
            <option key={child.id} value={child.id}>
              {child.name}
            </option>
          ))}
        </select>
      </div>

      <textarea
        value={observation}
        onChange={(event) => setObservation(event.target.value)}
        placeholder="Speak or type your observation..."
        className="mt-2 sm:mt-3 h-16 sm:h-20 w-full resize-none rounded-lg border border-sage/30 p-2 sm:p-3 text-xs sm:text-sm text-forest-900 outline-none placeholder:text-forest-700/40 focus:ring-1 focus:ring-forest-700"
      />

      <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm">
        <span className="text-forest-700">Domain:</span>
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${domainStyles[detectedDomain] ?? domainStyles.Unknown}`}>{detectedDomain}</span>
      </div>

      <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={handleSubmit}
          className="flex-1 sm:flex-none rounded-lg bg-forest-700 px-3 sm:px-5 py-2 text-xs sm:text-sm font-medium text-white hover:bg-forest-800"
        >
          Record
        </button>
        <button
          type="button"
          onClick={() => setRecording((current) => !current)}
          className="relative rounded-lg bg-mint-100 p-2 text-forest-700 hover:bg-sage/30"
          aria-label={recording ? 'Stop recording' : 'Start recording'}
        >
          {recording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          {recording ? <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-alert-red animate-pulse" /> : null}
        </button>
      </div>

      {aiState === 'analysing' && (
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#E8F5EE] px-4 py-3 text-sm text-[#235347]">
          <span className="font-medium">AI analysing observation</span>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="inline-block h-2 w-2 animate-bounce rounded-full bg-[#235347]"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      )}
      {aiState === 'idle' && count > 0 && (
        <div className="mt-3 flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-2.5 text-xs text-green-700">
          <span>✓</span> Observation logged · Domain signal extracted
        </div>
      )}
    </div>
  )
}