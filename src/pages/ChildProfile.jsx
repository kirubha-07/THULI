import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import DomainRadar from '../components/child/DomainRadar'
import MilestoneList from '../components/child/MilestoneList'
import EmotionHistory from '../components/child/EmotionHistory'
import RiskBadge from '../components/ui/RiskBadge'
import { children } from '../data/mockData'

function initialsFromName(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function ChildProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const child = children.find((entry) => entry.id === id)

  if (!child) {
    return (
      <Layout title="Child Profile" breadcrumb="All Children">
        <div className="rounded-xl border border-sage/20 bg-white p-6 shadow-sm">
          <div className="text-lg font-semibold text-forest-950">Child not found</div>
          <div className="mt-1 text-sm text-forest-700">The profile you requested is not available.</div>
          <button type="button" onClick={() => navigate('/dashboard')} className="mt-4 rounded-lg bg-forest-700 px-4 py-2 text-sm font-medium text-white hover:bg-forest-800">
            Back to dashboard
          </button>
        </div>
      </Layout>
    )
  }

  const concernLabel = child.domain ? `Primary concern: ${child.domain} Development` : 'Primary concern: None'
  const flaggedDays = child.risk === 'green' ? null : 5

  return (
    <Layout title={child.name} breadcrumb={`All Children · ${child.centre}`}>
      <div className="space-y-3 sm:space-y-4">
        <div className="rounded-lg sm:rounded-xl border border-sage/20 bg-white p-3 sm:p-4 md:p-6 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-4 sm:gap-6 lg:flex-row lg:items-start">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-forest-800 text-lg sm:text-2xl font-bold text-white">
                  {initialsFromName(child.name)}
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-bold text-forest-950">{child.name}</div>
                  <div className="text-xs sm:text-sm text-forest-700">{child.age}</div>
                </div>
              </div>

              <div className="inline-flex rounded-full border border-sage/30 bg-mint-100 px-2 sm:px-3 py-0.5 sm:py-1 font-mono text-xs text-forest-800">
                {child.id}
              </div>

              <div className="text-xs sm:text-sm text-forest-700">
                {child.centre} · {child.worker}
              </div>
            </div>

            <div className="text-left sm:text-right">
              <RiskBadge risk={child.risk} size="lg" />
              {child.risk !== 'green' ? (
                <div className="mt-1.5 sm:mt-2 space-y-0.5 sm:space-y-1 text-xs text-forest-700">
                  <div>{concernLabel}</div>
                  {flaggedDays ? <div>Flagged {flaggedDays} days ago</div> : null}
                </div>
              ) : (
                <div className="mt-1.5 sm:mt-2 text-xs text-forest-700">Stable</div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 sm:gap-4">
          <div className="col-span-12 lg:col-span-5">
            <DomainRadar child={child} />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <MilestoneList />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <EmotionHistory child={child} />
          </div>
        </div>
      </div>
    </Layout>
  )
}