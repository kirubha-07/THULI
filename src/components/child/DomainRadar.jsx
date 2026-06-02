import { useMemo, useState } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Legend } from 'recharts'

const monthTabs = ['Mar', 'Feb', 'Jan']

function colorForScore(score) {
  if (score < 40) {
    return 'bg-alert-red'
  }
  if (score <= 65) {
    return 'bg-alert-yellow'
  }
  return 'bg-alert-green'
}

export default function DomainRadar({ child }) {
  const [selectedMonth, setSelectedMonth] = useState('Mar')

  const chartData = useMemo(() => {
    const domains = child?.domains ?? {}
    const previous = child?.prevDomains ?? {}

    return [
      { subject: 'Physical', thisMonth: domains.Physical ?? 0, lastMonth: previous.Physical ?? 0 },
      { subject: 'Language', thisMonth: domains.Language ?? 0, lastMonth: previous.Language ?? 0 },
      { subject: 'Cognitive', thisMonth: domains.Cognitive ?? 0, lastMonth: previous.Cognitive ?? 0 },
      { subject: 'Social', thisMonth: domains.SocialEmotional ?? 0, lastMonth: previous.SocialEmotional ?? 0 },
      { subject: 'SelfCare', thisMonth: domains.SelfCare ?? 0, lastMonth: previous.SelfCare ?? 0 },
    ]
  }, [child])

  return (
    <div className="rounded-xl border border-sage/20 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-forest-950">Developmental Profile</h2>
          <div className="text-xs text-forest-700">{selectedMonth} snapshot</div>
        </div>
        <div className="flex gap-2">
          {monthTabs.map((month) => (
            <button
              key={month}
              type="button"
              onClick={() => setSelectedMonth(month)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                selectedMonth === month ? 'bg-forest-700 text-white' : 'bg-mint-100 text-forest-700 hover:bg-sage/30'
              }`}
            >
              {month}
            </button>
          ))}
        </div>
      </div>

      <div className="relative mt-4 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={chartData}>
            <PolarGrid stroke="#8EB69B" strokeOpacity={0.4} />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#235347', fontSize: 12 }} />
            <Radar name="This Month" dataKey="thisMonth" stroke="#163832" fill="#163832" fillOpacity={0.25} />
            <Radar name="Last Month" dataKey="lastMonth" stroke="#8EB69B" fill="#8EB69B" fillOpacity={0.15} />
            <Legend wrapperStyle={{ fontSize: 12, color: '#235347' }} />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-1 space-y-1.5">
        {chartData.map((domain) => (
          <div key={domain.subject} className="flex items-center justify-between py-1.5">
            <div className="w-28 text-xs font-medium text-forest-950">{domain.subject}</div>
            <div className="mx-3 h-2 flex-1 rounded-full bg-mint-100">
              <div className={`h-2 rounded-full ${colorForScore(domain.thisMonth)}`} style={{ width: `${domain.thisMonth}%` }} />
            </div>
            <div className="w-8 text-right text-xs font-semibold text-forest-950">{domain.thisMonth}</div>
          </div>
        ))}
      </div>
    </div>
  )
}