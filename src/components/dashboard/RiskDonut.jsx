import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts'
import { riskDistribution, stats } from '../../data/mockData'
import SectionHeader from '../ui/SectionHeader'

export default function RiskDonut() {
  const total = riskDistribution.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="h-72 rounded-xl border border-sage/20 bg-white p-5 shadow-sm">
      <SectionHeader
        title="Risk Distribution"
        eyebrow="This week"
        action={<span className="rounded-full bg-mint-100 px-3 py-1 text-xs font-medium text-forest-700">This week</span>}
      />

      <div className="relative mt-4 h-44">
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-2xl font-bold text-forest-950">{stats.totalChildren}</div>
          <div className="text-xs text-forest-700">children</div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={riskDistribution} dataKey="value" innerRadius={65} outerRadius={95} paddingAngle={4} stroke="none">
              {riskDistribution.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-1 space-y-2">
        {riskDistribution.map((entry) => {
          const percentage = Math.round((entry.value / total) * 100)
          return (
            <div key={entry.name} className="flex items-center justify-between border-b border-sage/10 pb-2 last:border-b-0 last:pb-0">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="text-sm text-forest-900">{entry.name}</span>
              </div>
              <div className="text-sm text-forest-700">
                <span>{entry.value}</span>
                <span className="ml-2 text-xs">{percentage}%</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}