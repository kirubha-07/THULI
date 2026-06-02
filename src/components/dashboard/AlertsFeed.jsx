import { useNavigate } from 'react-router-dom'
import { children } from '../../data/mockData'

export default function AlertsFeed() {
  const navigate = useNavigate()
  const alerts = children.filter((child) => child.risk !== 'green')

  return (
    <div className="rounded-lg sm:rounded-xl border border-sage/20 bg-white p-3 sm:p-4 md:p-5 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-sm sm:text-base font-semibold text-forest-950">Recent Alerts</h2>
        <button type="button" className="text-xs text-forest-700 hover:underline whitespace-nowrap" onClick={() => navigate('/children')}>
          View all
        </button>
      </div>

      <div className="mt-2 sm:mt-3">
        {alerts.map((child) => {
          const isRed = child.risk === 'red'
          return (
            <button
              key={child.id}
              type="button"
              className="flex w-full items-center gap-2 sm:gap-3 rounded-lg border-b border-sage/10 px-1.5 sm:px-2 py-2 sm:py-3 text-left transition-colors hover:bg-mint-50 last:border-b-0"
              onClick={() => navigate(`/child/${child.id}`)}
            >
              <span className={`h-9 sm:h-12 w-0.5 sm:w-1 rounded-full ${isRed ? 'bg-alert-red' : 'bg-alert-yellow'}`} />
              <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-mint-100 text-xs sm:text-sm font-semibold text-forest-800 flex-shrink-0">
                {child.name
                  .split(' ')
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((part) => part[0])
                  .join('')}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs sm:text-sm font-semibold text-forest-950">{child.name}</div>
                <div className="truncate text-[10px] sm:text-xs text-forest-700">
                  {child.domain ?? 'General'} concern · {child.centre}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 sm:gap-2 flex-shrink-0">
                <span className="text-xs text-forest-700 hidden sm:inline">{child.lastSeen}</span>
                <span className="rounded-full bg-mint-100 px-2 sm:px-3 py-0.5 sm:py-1 text-xs text-forest-700 hover:bg-sage/30">View</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}