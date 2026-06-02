import { ArrowRightLeft, AlertCircle, Building2, Users } from 'lucide-react'
import Layout from '../components/layout/Layout'
import StatCard from '../components/ui/StatCard'
import RiskDonut from '../components/dashboard/RiskDonut'
import AlertsFeed from '../components/dashboard/AlertsFeed'
import WorkerPerformance from '../components/dashboard/WorkerPerformance'
import ReferralPipeline from '../components/dashboard/ReferralPipeline'
import { dashboardObservations, stats } from '../data/mockData'

export default function SupervisorDashboard() {
  return (
    <Layout title="District Overview" breadcrumb="Coimbatore District · 34 Active Centres · March 2025">
      <div className="space-y-3 sm:space-y-4">
        <div className="grid gap-2 sm:gap-3 md:gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
          <StatCard value={stats.totalChildren} label="Total Children Enrolled" icon={Users} trend={12} trendLabel="this month" accent="green" />
          <StatCard value={stats.redFlagged} label="Red Flagged This Week" icon={AlertCircle} trend={4} trendLabel="vs last week" accent="red" />
          <StatCard value={stats.referralsPending} label="Referrals Pending" icon={ArrowRightLeft} trend={-2} trendLabel="resolved today" accent="green" />
          <StatCard value={stats.activeCentres} label="Active Centres" icon={Building2} trend={0} trendLabel="all operational" accent="neutral" />
        </div>

        <div className="grid grid-cols-12 gap-3 sm:gap-4">
          <div className="col-span-12 lg:col-span-4">
            <RiskDonut />
          </div>
          <div className="col-span-12 lg:col-span-5">
            <AlertsFeed />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <WorkerPerformance />
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
          <ReferralPipeline />
          <div className="rounded-lg sm:rounded-xl border border-sage/20 bg-white p-3 sm:p-4 md:p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-xs sm:text-base font-semibold text-forest-950">Recent Observations</h2>
              <span className="text-xs text-forest-700">Voice log</span>
            </div>
            <div className="mt-2 sm:mt-4 space-y-2 sm:space-y-4">
              {dashboardObservations.map((entry) => (
                <div key={`${entry.worker}-${entry.time}`} className="rounded-lg border border-sage/10 bg-mint-50 p-2 sm:p-3">
                  <div className="text-xs text-forest-700">
                    {entry.worker} · {entry.time}:
                  </div>
                  <div className="mt-0.5 text-xs sm:text-sm italic text-forest-900">{entry.text}</div>
                  <div className="mt-1.5 sm:mt-2 inline-flex rounded-full bg-mint-100 px-1.5 sm:px-2 py-0.5 text-xs text-forest-700">{entry.domain}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}