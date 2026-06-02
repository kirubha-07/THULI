import { workers } from '../../data/mockData'

export default function WorkerPerformance() {
  return (
    <div className="rounded-xl border border-sage/20 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-forest-950">Top Workers</h2>
        <span className="text-xs text-forest-700">This month</span>
      </div>

      <div className="mt-4 space-y-4">
        {workers.map((worker) => (
          <div key={worker.name}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-forest-950">{worker.name}</div>
                <div className="text-xs text-forest-700">{worker.centre}</div>
              </div>
              <div className="text-xs font-semibold text-forest-700">{worker.score}</div>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-mint-100">
              <div className="h-1.5 rounded-full bg-forest-700" style={{ width: `${worker.score}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}