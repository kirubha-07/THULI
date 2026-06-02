import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import Layout from '../components/layout/Layout'
import PriorityCards from '../components/worker/PriorityCards'
import ChildGrid from '../components/worker/ChildGrid'
import QuickLogPanel from '../components/worker/QuickLogPanel'
import { workerChildList } from '../data/mockData'

export default function WorkerView() {
  const [showWA, setShowWA] = useState(false)

  return (
    <Layout title="Morning Digest" breadcrumb="Centre 12, Ukkadam · Tuesday, 4 March 2025">
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-black text-[#051F20]">Morning Digest</h1>
          <p className="mt-0.5 text-sm text-[#235347]">Centre 12, Ukkadam · Tuesday, 4 March 2025</p>
        </div>
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

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setShowWA(true)}
            className="flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#128C7E]"
          >
            <MessageCircle size={16} />
            Send WhatsApp Update
          </button>
        </div>

        <PriorityCards />

        <ChildGrid />

        <QuickLogPanel />
      </div>

      {showWA ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowWA(false)}
        >
          <div
            className="mx-4 w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="text-lg font-black text-[#051F20]">Report sent via WhatsApp</div>
              <button type="button" onClick={() => setShowWA(false)} className="text-[#235347]" aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <div className="mb-6 rounded-2xl bg-[#E8F5EE] p-5">
              <div className="mb-3 text-xs text-[#235347]">Sent to: Parent (+91 98XXX XXXXX)</div>
              <div className="rounded-2xl rounded-tl-sm bg-[#25D366] p-4 text-sm text-white">
                <div>THULI Weekly Update</div>
                <div className="mt-2">Child: Riya K. · 20 months</div>
                <div>Weight: 9.1 kg ✓</div>
                <div>Language domain: needs attention</div>
                <div>This week: Talk more during daily activities</div>
                <div>— Meenakshi R., Centre 12</div>
                <div className="mt-3 text-right text-xs text-white/70">10:24 AM ✓✓</div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowWA(false)}
              className="w-full rounded-xl bg-[#051F20] py-3 font-semibold text-white"
            >
              Done
            </button>
          </div>
        </div>
      ) : null}
    </Layout>
  )
}