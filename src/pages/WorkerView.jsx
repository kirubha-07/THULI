import Layout from '../components/layout/Layout'
import PriorityCards from '../components/worker/PriorityCards'
import ChildGrid from '../components/worker/ChildGrid'
import QuickLogPanel from '../components/worker/QuickLogPanel'
import { workerChildList } from '../data/mockData'

export default function WorkerView() {
  return (
    <Layout title="Morning Digest" breadcrumb="Centre 12, Ukkadam · Tuesday, 4 March 2025">
      <div className="space-y-4">
        <div className="flex flex-col justify-between gap-3 rounded-lg sm:rounded-xl bg-forest-800 p-4 sm:p-5 text-white sm:gap-4 lg:flex-row lg:items-center">
          <div>
            <div className="text-lg sm:text-xl font-semibold">Good morning, Meenakshi 👋</div>
            <div className="text-xs sm:text-sm text-sage">You have 3 priority items today</div>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="rounded-lg bg-forest-700 px-2 sm:px-4 py-2 text-center">
              <div className="text-base sm:text-lg font-semibold">{workerChildList.length}</div>
              <div className="text-xs text-sage/80">children</div>
            </div>
            <div className="rounded-lg bg-forest-700 px-2 sm:px-4 py-2 text-center">
              <div className="text-base sm:text-lg font-semibold">Today</div>
              <div className="text-xs text-sage/80">attendance</div>
            </div>
            <div className="rounded-lg bg-forest-700 px-2 sm:px-4 py-2 text-center">
              <div className="text-base sm:text-lg font-semibold">3</div>
              <div className="text-xs text-sage/80">urgent</div>
            </div>
          </div>
        </div>

        <PriorityCards />

        <ChildGrid />

        <QuickLogPanel />
      </div>
    </Layout>
  )
}