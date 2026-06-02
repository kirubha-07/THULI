import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { AlertTriangle, CheckCircle, Clock, Download, TrendingUp } from 'lucide-react'
import Layout from '../components/layout/Layout'

const domainBarData = [
  { d: 'Language', n: 34 },
  { d: 'Social', n: 22 },
  { d: 'Physical', n: 18 },
  { d: 'Cognitive', n: 12 },
  { d: 'Self-Care', n: 8 },
]

const completionTrendData = [
  { m: 'Jan', r: 45 },
  { m: 'Feb', r: 52 },
  { m: 'Mar', r: 61 },
  { m: 'Apr', r: 58 },
  { m: 'May', r: 67 },
  { m: 'Jun', r: 72 },
]

const referralStages = [
  { stage: 'Flagged', count: 23 },
  { stage: 'Confirmed', count: 18 },
  { stage: 'Referred', count: 11 },
  { stage: 'Visited', count: 6 },
  { stage: 'Closed', count: 3 },
]

const criticalAlerts = [
  { name: 'Riya K.', age: '20mo', centre: 'Centre 12', domain: 'Language', severity: 'red', days: 7 },
  { name: 'Arjun S.', age: '14mo', centre: 'Centre 8', domain: 'Physical', severity: 'red', days: 5 },
  { name: 'Priya M.', age: '36mo', centre: 'Centre 3', domain: 'Cognitive', severity: 'yellow', days: 3 },
  { name: 'Karthik R.', age: '28mo', centre: 'Centre 15', domain: 'Social', severity: 'yellow', days: 2 },
  { name: 'Meena L.', age: '18mo', centre: 'Centre 7', domain: 'Language', severity: 'yellow', days: 1 },
]

const topWorkers = [
  { initials: 'MR', name: 'Meenakshi R.', centre: 'Centre 12', score: 87 },
  { initials: 'IK', name: 'Isha K.', centre: 'Centre 5', score: 92 },
  { initials: 'RM', name: 'Ravi M.', centre: 'Centre 9', score: 78 },
  { initials: 'SP', name: 'Sunita P.', centre: 'Centre 3', score: 85 },
  { initials: 'AT', name: 'Arun T.', centre: 'Centre 17', score: 71 },
]

const highRiskIndices = new Set([1, 8, 9, 17, 32])
const watchIndices = new Set([2, 10, 16, 24, 25, 33])
const safeIndices = new Set([3, 11, 12, 19, 26, 27, 34, 35])

function heatmapCellStyle(index) {
  if (highRiskIndices.has(index)) {
    return { fill: '#D64045', fillOpacity: 0.85 }
  }
  if (watchIndices.has(index)) {
    return { fill: '#E8A838', fillOpacity: 0.75 }
  }
  if (safeIndices.has(index)) {
    return { fill: '#3A9E5F', fillOpacity: 0.65 }
  }
  return { fill: '#8EB69B', fillOpacity: 0.5 }
}

const heatmapCells = Array.from({ length: 40 }, (_, index) => {
  const col = index % 8
  const row = Math.floor(index / 8)
  return {
    index,
    block: index + 1,
    x: 8 + col * 64,
    y: 8 + row * 52,
    style: heatmapCellStyle(index),
  }
})

const tooltipStyle = {
  background: '#051F20',
  border: 'none',
  borderRadius: 8,
  color: 'white',
  fontSize: 12,
}

export default function GovernmentPage() {
  return (
    <Layout title="Government Portal" breadcrumb="Coimbatore District · Tamil Nadu">
      <div className="min-h-full rounded-xl bg-[#E8F5EE] p-4 sm:p-6">
        {/* Section 1 — Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-black text-[#051F20]">District Intelligence Dashboard</h1>
            <p className="mt-1 text-sm text-[#235347]">Coimbatore District · Tamil Nadu · Live Analytics</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#235347]">
              <span className="mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Last synced: 2 mins ago
            </span>
            <button
              type="button"
              className="flex items-center gap-2 rounded-xl bg-[#051F20] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#163832]"
            >
              <Download size={16} />
              Export Report
            </button>
          </div>
        </div>

        {/* Section 2 — Stats Row */}
        <div className="mb-6 grid grid-cols-4 gap-4">
          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
            <TrendingUp size={20} className="mb-3 text-[#235347]" />
            <div className="text-4xl font-black text-[#051F20]">847</div>
            <div className="mt-1 text-xs text-[#235347]">Total children enrolled</div>
            <div className="mt-2 text-xs font-medium text-green-600">+12 this month</div>
          </div>

          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
            <AlertTriangle size={20} className="mb-3 text-red-500" />
            <div className="animate-pulse text-4xl font-black text-red-600">23</div>
            <div className="mt-1 text-xs text-[#235347]">Red flagged</div>
            <div className="mt-2 text-xs font-medium text-red-500">+3 this week</div>
          </div>

          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
            <Clock size={20} className="mb-3 text-yellow-600" />
            <div className="text-4xl font-black text-yellow-600">18</div>
            <div className="mt-1 text-xs text-[#235347]">Pending referrals</div>
            <div className="mt-2 text-xs text-yellow-600">7 overdue &gt;14 days</div>
          </div>

          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
            <CheckCircle size={20} className="mb-3 text-green-600" />
            <div className="text-4xl font-black text-green-600">34</div>
            <div className="mt-1 text-xs text-[#235347]">Active centres</div>
            <div className="mt-2 text-xs text-[#235347]">Coimbatore block</div>
          </div>
        </div>

        {/* Section 3 — Main Grid */}
        <div className="mb-6 grid grid-cols-5 gap-6">
          {/* Left — Heatmap */}
          <div className="col-span-3 rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
            <div className="mb-5 text-sm font-semibold text-[#051F20]">District risk heatmap — Coimbatore blocks</div>

            <svg width="100%" viewBox="0 0 560 280" aria-label="District risk heatmap">
              {heatmapCells.map((cell) => (
                <rect
                  key={cell.index}
                  x={cell.x}
                  y={cell.y}
                  width={56}
                  height={44}
                  rx={6}
                  {...cell.style}
                >
                  <title>{`Block ${cell.block}`}</title>
                </rect>
              ))}
            </svg>

            <div className="mt-4 flex gap-6">
              {[
                { color: '#D64045', label: 'High risk' },
                { color: '#E8A838', label: 'Watch' },
                { color: '#3A9E5F', label: 'Safe' },
                { color: '#8EB69B', label: 'Normal' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-xs text-[#235347]">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.label}
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3">
              <AlertTriangle size={14} className="mr-2 inline text-red-500" />
              <span className="text-xs italic text-red-700">
                Cluster detected: Block 4 area — 11 children flagged for language concerns within 2km. Environmental
                assessment recommended.
              </span>
            </div>
          </div>

          {/* Right — Pipeline + Alerts */}
          <div className="col-span-2 flex flex-col gap-6">
            <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
              <div className="mb-4 text-sm font-semibold text-[#051F20]">Referral pipeline</div>
              <div className="space-y-3">
                {referralStages.map((stage) => (
                  <div
                    key={stage.stage}
                    className="flex items-center justify-between border-b border-[#8EB69B]/15 py-2 last:border-b-0"
                  >
                    <span className="text-sm font-medium text-[#235347]">{stage.stage}</span>
                    <span className="rounded-full bg-[#E8F5EE] px-4 py-1 text-sm font-black text-[#051F20]">
                      {stage.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
              <div className="mb-4 text-sm font-semibold text-[#051F20]">Critical alerts</div>
              <div className="space-y-2">
                {criticalAlerts.map((alert, index) => (
                  <div
                    key={alert.name}
                    className={`flex items-center justify-between rounded-lg p-3 ${index % 2 === 0 ? 'bg-[#F8FDF9]' : 'bg-white'}`}
                  >
                    <div>
                      <div className="text-sm font-semibold text-[#051F20]">{alert.name}</div>
                      <div className="text-xs text-[#235347]">
                        {alert.age} · {alert.centre}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full border px-2 py-0.5 text-xs ${
                          alert.severity === 'red'
                            ? 'border-red-200 bg-red-50 text-red-700'
                            : 'border-yellow-200 bg-yellow-50 text-yellow-700'
                        }`}
                      >
                        {alert.domain}
                      </span>
                      <span className="text-xs text-[#235347]">{alert.days} days</span>
                      <button
                        type="button"
                        className="rounded-lg bg-[#051F20] px-3 py-1.5 text-xs text-white"
                      >
                        Review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 — Bottom Row */}
        <div className="grid grid-cols-3 gap-6">
          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
            <div className="mb-4 text-sm font-semibold text-[#051F20]">Flags by development domain</div>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={domainBarData}>
                  <CartesianGrid vertical={false} stroke="#8EB69B" strokeOpacity={0.25} />
                  <XAxis dataKey="d" tick={{ fontSize: 10, fill: '#235347' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: '#235347' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="n" fill="#235347" radius={[4, 4, 0, 0]} maxBarSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
            <div className="mb-4 text-sm font-semibold text-[#051F20]">Referral completion rate</div>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={completionTrendData}>
                  <CartesianGrid vertical={false} stroke="#8EB69B" strokeOpacity={0.25} />
                  <XAxis dataKey="m" tick={{ fontSize: 10, fill: '#235347' }} axisLine={false} tickLine={false} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 10, fill: '#235347' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Area dataKey="r" stroke="#163832" strokeWidth={2} fill="#E8F5EE" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
            <div className="mb-4 text-sm font-semibold text-[#051F20]">Top workers</div>
            <div className="space-y-4">
              {topWorkers.map((worker) => (
                <div key={worker.initials} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#163832] text-xs font-black text-white">
                    {worker.initials}
                  </div>
                  <div className="min-w-0 shrink">
                    <div className="text-sm font-semibold text-[#051F20]">{worker.name}</div>
                    <div className="text-xs text-[#235347]">{worker.centre}</div>
                  </div>
                  <div className="relative ml-2 h-2 w-24 flex-1 rounded-full bg-[#E8F5EE]">
                    <div
                      className="absolute left-0 h-2 rounded-full bg-[#235347]"
                      style={{ width: `${worker.score}%` }}
                    />
                  </div>
                  <span className="ml-2 shrink-0 text-xs font-bold text-[#235347]">{worker.score}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
