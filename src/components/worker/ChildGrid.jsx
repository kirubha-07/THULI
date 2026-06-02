import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RiskBadge from '../ui/RiskBadge'
import ChildAvatar from '../ui/ChildAvatar'
import { workerChildList } from '../../data/mockData'

const filters = ['All', 'Red', 'Yellow', 'Green']

function scoreToColor(score) {
  if (score < 40) {
    return 'bg-alert-red'
  }
  if (score <= 65) {
    return 'bg-alert-yellow'
  }
  return 'bg-alert-green'
}

export default function ChildGrid() {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const navigate = useNavigate()

  const filteredChildren = useMemo(() => {
    if (selectedFilter === 'All') {
      return workerChildList.slice(0, 6)
    }
    const risk = selectedFilter.toLowerCase()
    return workerChildList.filter((child) => child.risk === risk).slice(0, 6)
  }, [selectedFilter])

  return (
    <div className="mt-4">
      <div className="flex items-start justify-between gap-3 sm:gap-4">
        <h2 className="text-sm sm:text-base font-semibold text-forest-950">My Children (38)</h2>
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

      <div className="mt-3 sm:mt-4 grid gap-2 sm:gap-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
        {filteredChildren.map((child) => (
          <button
            key={child.id}
            type="button"
            className="rounded-lg sm:rounded-xl border border-sage/20 bg-white p-2.5 sm:p-3 md:p-4 text-left shadow-sm transition-shadow hover:shadow-md"
            onClick={() => navigate(`/child/${child.id}`)}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="relative">
                <ChildAvatar name={child.name} size="md" />
                <span className={`absolute -right-1 top-0 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full ${child.risk === 'red' ? 'bg-alert-red' : child.risk === 'yellow' ? 'bg-alert-yellow' : 'bg-alert-green'}`} />
              </div>
              <div className="text-[9px] sm:text-[10px] text-forest-700/60">{child.id}</div>
            </div>

            <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-semibold text-forest-950">{child.name}</div>
            <div className="text-[10px] sm:text-xs text-forest-700">
              {child.age} · {child.centre}
            </div>

            <div className="mt-2 sm:mt-3 flex items-end justify-between gap-0.5">
              {Object.entries(child.domains).map(([domain, score]) => {
                const label = domain === 'SocialEmotional' ? 'S' : domain === 'SelfCare' ? 'SC' : domain[0]
                return (
                  <div key={domain} className="flex flex-1 flex-col items-center gap-0.5">
                    <div className={`h-3 sm:h-5 w-1.5 sm:w-2 rounded-sm ${scoreToColor(score)}`} />
                    <div className="text-[8px] sm:text-[9px] text-forest-700">{label}</div>
                  </div>
                )
              })}
            </div>

            <div className="mt-1.5 sm:mt-2 text-[9px] sm:text-xs text-forest-700/60">Last seen {child.lastSeen}</div>
            <div className="mt-2 sm:mt-3 flex justify-end">
              <RiskBadge risk={child.risk} />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}