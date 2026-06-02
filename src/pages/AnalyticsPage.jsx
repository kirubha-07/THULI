import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Building2, Download, TrendingDown, TrendingUp, Users } from 'lucide-react'
import Layout from '../components/layout/Layout'
import StatCard from '../components/ui/StatCard'

const domainHealthData = [
  { domain: 'Self-Care', pct: 84 },
  { domain: 'Physical', pct: 79 },
  { domain: 'Cognitive', pct: 71 },
  { domain: 'Social', pct: 63 },
  { domain: 'Language', pct: 54 },
]

const flagsTrendData = [
  { m: 'Jan', flags: 28, resolved: 21 },
  { m: 'Feb', flags: 34, resolved: 29 },
  { m: 'Mar', flags: 31, resolved: 26 },
  { m: 'Apr', flags: 41, resolved: 33 },
  { m: 'May', flags: 38, resolved: 35 },
  { m: 'Jun', flags: 44, resolved: 38 },
]

const ageGroupData = [
  { age: '0-1 yr', safe: 45, watch: 12, risk: 5 },
  { age: '1-2 yr', safe: 89, watch: 28, risk: 11 },
  { age: '2-3 yr', safe: 112, watch: 35, risk: 18 },
  { age: '3-4 yr', safe: 134, watch: 29, risk: 14 },
  { age: '4-5 yr', safe: 98, watch: 22, risk: 9 },
  { age: '5-6 yr', safe: 76, watch: 18, risk: 7 },
]

const topConcerns = [
  { label: 'Speech delay', count: 34, width: '77%' },
  { label: 'Low weight', count: 28, width: '64%' },
  { label: 'Motor delay', count: 22, width: '50%' },
  { label: 'Eye contact', count: 19, width: '43%' },
  { label: 'Hearing concern', count: 14, width: '32%' },
  { label: 'Nutrition', count: 11, width: '25%' },
]

const referralOutcomes = [
  { name: 'Closed', value: 31, fill: '#3A9E5F' },
  { name: 'In progress', value: 18, fill: '#E8A838' },
  { name: 'Not visited', value: 11, fill: '#D64045' },
  { name: 'Lost to follow-up', value: 4, fill: '#8EB69B' },
]

const activityData = [
  45, 82, 23, 67, 91, 34, 78, 56, 43, 88,
  29, 71, 95, 42, 63, 37, 84, 51, 76, 28,
  93, 47, 68, 32, 87, 54, 79, 41, 65, 88,
]

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const tooltipStyle = {
  background: '#051F20',
  border: 'none',
  borderRadius: 8,
  color: 'white',
  fontSize: 12,
}

function activityClass(value) {
  if (value >= 91) {
    return 'bg-[#051F20] text-white'
  }
  if (value >= 61) {
    return 'bg-[#235347]/60 text-white'
  }
  if (value >= 31) {
    return 'bg-[#8EB69B]/50 text-[#235347]'
  }
  return 'bg-[#E8F5EE] text-[#8EB69B]'
}

export default function AnalyticsPage() {
  const calendarCells = []
  for (let i = 0; i < 35; i += 1) {
    if (i < 30) {
      calendarCells.push({ day: i + 1, value: activityData[i] })
    } else {
      calendarCells.push(null)
    }
  }

  return (
    <Layout title="Analytics" breadcrumb="District Trends · June 2026">
      <div className="rounded-xl bg-[#E8F5EE] p-4 sm:p-6">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-black text-[#051F20]">Analytics & Insights</h1>
            <p className="mt-0.5 text-sm text-[#235347]">Coimbatore District · June 2026</p>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-[#051F20] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#163832]"
          >
            <Download size={16} />
            Download Report
          </button>
        </div>

        <div className="mb-6 grid grid-cols-4 gap-4">
          <StatCard value={847} label="Children monitored" icon={Users} trend={23} trendLabel="this month" accent="green" />
          <StatCard value="72%" label="On-track development" icon={TrendingDown} trend={-2} trendLabel="from last month" accent="red" />
          <StatCard value={34} label="Active Anganwadi centres" icon={Building2} trend={0} trendLabel="same as last month" accent="neutral" />
          <StatCard value="89%" label="Worker app adoption" icon={TrendingUp} trend={12} trendLabel="this month" accent="green" />
        </div>

        <div className="mb-6 grid grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
            <div className="text-sm font-semibold text-[#051F20]">Development domain health</div>
            <div className="mb-4 text-xs text-[#235347]">% of children on-track per domain</div>
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={domainHealthData}>
                  <CartesianGrid vertical={false} stroke="#8EB69B" strokeOpacity={0.2} />
                  <XAxis dataKey="domain" tick={{ fontSize: 11, fill: '#235347' }} axisLine={false} tickLine={false} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#235347' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                  <Tooltip formatter={(v) => `${v}%`} contentStyle={tooltipStyle} />
                  <ReferenceLine y={70} stroke="#D64045" strokeDasharray="4 4" strokeWidth={1.5} label={{ value: 'Target', position: 'right', fill: '#D64045', fontSize: 10 }} />
                  <Bar dataKey="pct" fill="#235347" radius={[4, 4, 0, 0]} maxBarSize={48} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
            <div className="text-sm font-semibold text-[#051F20]">Monthly flags raised vs resolved</div>
            <div className="mb-4 text-xs text-[#235347]">Last 6 months</div>
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={flagsTrendData}>
                  <CartesianGrid vertical={false} stroke="#8EB69B" strokeOpacity={0.25} />
                  <XAxis dataKey="m" tick={{ fontSize: 10, fill: '#235347' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: '#235347' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Line dataKey="flags" stroke="#D64045" strokeWidth={2} dot={{ r: 4 }} />
                  <Line dataKey="resolved" stroke="#3A9E5F" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-xs text-[#235347]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D64045]" />
                Flagged
              </div>
              <div className="flex items-center gap-2 text-xs text-[#235347]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#3A9E5F]" />
                Resolved
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-3 gap-6">
          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
            <div className="mb-4 text-sm font-semibold text-[#051F20]">Risk by age group</div>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ageGroupData}>
                  <CartesianGrid vertical={false} stroke="#8EB69B" strokeOpacity={0.25} />
                  <XAxis dataKey="age" tick={{ fontSize: 10, fill: '#235347' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: '#235347' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="safe" stackId="a" fill="#3A9E5F" />
                  <Bar dataKey="watch" stackId="a" fill="#E8A838" />
                  <Bar dataKey="risk" stackId="a" fill="#D64045" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
            <div className="mb-4 text-sm font-semibold text-[#051F20]">Most common concerns</div>
            <div className="space-y-4">
              {topConcerns.map((item) => (
                <div key={item.label}>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm text-[#051F20]">{item.label}</span>
                    <span className="text-xs text-[#235347]">{item.count} children</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#E8F5EE]">
                    <div className="h-2 rounded-full bg-[#235347]" style={{ width: item.width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
            <div className="mb-4 text-sm font-semibold text-[#051F20]">Referral outcomes</div>
            <div className="h-[160px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={referralOutcomes} dataKey="value" cx="50%" cy="50%" innerRadius={45} outerRadius={70}>
                    {referralOutcomes.map((entry) => (
                      <Cell key={entry.name} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={tooltipStyle} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              {referralOutcomes.map((entry) => (
                <div key={entry.name} className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: entry.fill }} />
                  <span className="text-xs text-[#235347]">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
          <div className="text-sm font-semibold text-[#051F20]">Daily observation activity — June 2026</div>
          <div className="mb-5 text-xs text-[#235347]">Darker = more observations logged</div>
          <div className="mb-2 grid grid-cols-7 text-center text-xs font-medium text-[#235347]">
            {weekDays.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1.5">
            {calendarCells.map((cell, index) =>
              cell ? (
                <div
                  key={cell.day}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs ${activityClass(cell.value)}`}
                  title={`${cell.value} observations`}
                >
                  {cell.day}
                </div>
              ) : (
                <div key={`empty-${index}`} className="h-8 w-8" />
              ),
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
