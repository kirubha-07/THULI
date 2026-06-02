import { ArrowRightLeft, FileText, Home } from 'lucide-react'
import { priorityActions } from '../../data/mockData'

const iconMap = {
  'home-visit': Home,
  referral: ArrowRightLeft,
  report: FileText,
}

export default function PriorityCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {priorityActions.map((action) => {
        const Icon = iconMap[action.type] ?? FileText
        return (
          <div key={action.title} className={`rounded-xl border bg-white p-5 shadow-sm ${action.urgent ? 'border-l-4 border-l-alert-red' : 'border-l-4 border-l-sage border-sage/20'}`}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-mint-100 text-forest-700">
              <Icon className="h-4 w-4" />
            </div>
            <div className="mt-3 text-sm font-semibold text-forest-950">{action.title}</div>
            <div className="mt-1 text-xs text-forest-700">{action.detail}</div>
            <button type="button" className="mt-3 rounded-lg bg-mint-100 px-3 py-1.5 text-xs font-medium text-forest-700 hover:bg-sage/30">
              Open action
            </button>
          </div>
        )
      })}
    </div>
  )
}