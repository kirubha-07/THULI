import { useMemo, useState } from 'react'
import { CheckCircle2, Circle, XCircle } from 'lucide-react'
import { milestones } from '../../data/mockData'

const filters = ['All', 'Physical', 'Language', 'Cognitive', 'Social', 'Self-Care']

const domainMap = {
  All: ['Physical', 'Language', 'Cognitive', 'SocialEmotional', 'SelfCare'],
  Physical: ['Physical'],
  Language: ['Language'],
  Cognitive: ['Cognitive'],
  Social: ['SocialEmotional'],
  'Self-Care': ['SelfCare'],
}

export default function MilestoneList() {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const visibleMilestones = useMemo(() => {
    return domainMap[selectedFilter].flatMap((domain) => {
      const items = milestones[domain] ?? []
      return items.map((item) => ({ ...item, domain }))
    })
  }, [selectedFilter])

  const countSummary = useMemo(() => {
    const allItems = Object.values(milestones).flat()
    return allItems.reduce(
      (summary, item) => {
        summary[item.status] += 1
        return summary
      },
      { achieved: 0, pending: 0, overdue: 0 },
    )
  }, [])

  const iconMap = {
    achieved: <CheckCircle2 className="h-4 w-4 text-alert-green" />,
    pending: <Circle className="h-4 w-4 text-sage" />,
    overdue: <XCircle className="h-4 w-4 text-alert-red" />,
  }

  return (
    <div className="rounded-lg sm:rounded-xl border border-sage/20 bg-white p-3 sm:p-4 md:p-5 shadow-sm">
      <div className="flex items-start justify-between gap-2 sm:gap-4">
        <h2 className="text-sm sm:text-base font-semibold text-forest-950">Milestones</h2>
        <div className="flex flex-wrap justify-end gap-1 sm:gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setSelectedFilter(filter)}
              className={`rounded-full px-2.5 sm:px-3 py-1 text-xs font-medium transition-colors ${
                selectedFilter === filter ? 'bg-forest-700 text-white' : 'bg-mint-100 text-forest-700 hover:bg-sage/30'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-2 sm:mt-4 space-y-0.5 sm:space-y-1">
        {visibleMilestones.map((item) => (
          <div key={`${item.domain}-${item.text}`} className="flex items-center gap-1.5 sm:gap-2.5 border-b border-sage/10 py-1.5 sm:py-2 last:border-b-0">
            {iconMap[item.status]}
            <div className="text-xs sm:text-sm text-forest-950">{item.text}</div>
            <div className="ml-auto rounded-full bg-mint-100 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] text-forest-700">
              {item.domain === 'SocialEmotional' ? 'Social' : item.domain === 'SelfCare' ? 'Self-Care' : item.domain}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 text-xs text-forest-700">
        ✓ {countSummary.achieved} · ○ {countSummary.pending} · ✗ {countSummary.overdue}
      </div>
    </div>
  )
}