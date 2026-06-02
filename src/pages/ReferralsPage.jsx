import { useMemo, useState } from 'react'
import Layout from '../components/layout/Layout'
import ChildAvatar from '../components/ui/ChildAvatar'
import { children } from '../data/mockData'

const referralData = [
  { id: 1, domain: 'Language', specialist: 'Speech Therapist · DEIC Coimbatore', days: 7, status: 'Overdue' },
  { id: 2, domain: 'Physical', specialist: 'Physiotherapist · PHC Ukkadam', days: 5, status: 'Pending' },
  { id: 3, domain: 'Cognitive', specialist: 'Special Educator · NIMHANS', days: 3, status: 'Pending' },
  { id: 4, domain: 'Social', specialist: 'Child Psychologist · DEIC', days: 12, status: 'Overdue' },
  { id: 5, domain: 'Language', specialist: 'ENT · Coimbatore Medical', days: 2, status: 'Pending' },
  { id: 6, domain: 'Physical', specialist: 'Neurologist · PSG Hospital', days: 14, status: 'Visited' },
  { id: 7, domain: 'Cognitive', specialist: 'Special Educator · DEIC', days: 1, status: 'Pending' },
  { id: 8, domain: 'Social', specialist: 'Child Psychologist · NIMHANS', days: 9, status: 'Closed' },
]

const pipelineStages = [
  { label: 'Flagged', count: '23', circle: 'bg-red-100 text-red-700' },
  { label: 'Confirmed', count: '18', circle: 'bg-orange-100 text-orange-700' },
  { label: 'Referred', count: '11', circle: 'bg-yellow-100 text-yellow-700' },
  { label: 'Visited', count: '6', circle: 'bg-blue-100 text-blue-700' },
  { label: 'Closed', count: '3', circle: 'bg-green-100 text-green-700' },
]

const filterTabs = ['All', 'Pending', 'Overdue', 'Closed']

const domainStyles = {
  Language: 'bg-blue-50 text-blue-700 border border-blue-200',
  Physical: 'bg-green-50 text-green-700 border border-green-200',
  Cognitive: 'bg-purple-50 text-purple-700 border border-purple-200',
  Social: 'bg-pink-50 text-pink-700 border border-pink-200',
}

const statusStyles = {
  Pending: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
  Overdue: 'bg-red-50 text-red-700 border border-red-200',
  Visited: 'bg-blue-50 text-blue-700 border border-blue-200',
  Closed: 'bg-green-50 text-green-700 border border-green-200',
}

export default function ReferralsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const rows = useMemo(() => {
    return referralData.map((referral, index) => ({
      ...referral,
      child: children[index],
    }))
  }, [])

  const filteredRows = useMemo(() => {
    if (activeFilter === 'All') {
      return rows
    }
    if (activeFilter === 'Pending') {
      return rows.filter((row) => row.status === 'Pending')
    }
    if (activeFilter === 'Overdue') {
      return rows.filter((row) => row.status === 'Overdue')
    }
    return rows.filter((row) => row.status === 'Closed' || row.status === 'Visited')
  }, [activeFilter, rows])

  return (
    <Layout title="Referrals" breadcrumb="Case Follow-up · March 2025">
      <div className="rounded-xl bg-[#E8F5EE] p-4 sm:p-6">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-black text-[#051F20]">Referral Management</h1>
            <p className="mt-0.5 text-sm text-[#235347]">Track every referral from flag to outcome</p>
          </div>
          <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
            Active: 11
          </span>
        </div>

        <div className="mb-8 grid grid-cols-4 gap-4">
          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-5">
            <div className="text-3xl font-black text-[#051F20]">23</div>
            <div className="mt-1 text-xs text-[#235347]">Total flagged</div>
          </div>
          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-5">
            <div className="text-3xl font-black text-red-600">11</div>
            <div className="mt-1 text-xs text-[#235347]">Awaiting referral</div>
          </div>
          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-5">
            <div className="text-3xl font-black text-yellow-600">6</div>
            <div className="mt-1 text-xs text-[#235347]">Referred, not visited</div>
          </div>
          <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-5">
            <div className="text-3xl font-black text-green-600">3</div>
            <div className="mt-1 text-xs text-[#235347]">Closed this month</div>
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
          <div className="mb-5 text-sm font-semibold text-[#051F20]">Referral pipeline</div>
          <div className="flex items-start justify-between">
            {pipelineStages.map((stage, index) => (
              <div key={stage.label} className="flex flex-1 items-start">
                <div className="flex-1 text-center">
                  <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full text-lg font-black ${stage.circle}`}>
                    {stage.count}
                  </div>
                  <div className="mt-2 text-xs font-medium text-[#235347]">{stage.label}</div>
                </div>
                {index < pipelineStages.length - 1 ? (
                  <div className="mx-2 mt-6 h-0.5 flex-1 bg-[#8EB69B]/30" />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#8EB69B]/30 bg-white">
          <div className="flex items-center justify-between border-b border-[#8EB69B]/20 p-5">
            <div className="text-sm font-semibold text-[#051F20]">All referrals</div>
            <div className="flex gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveFilter(tab)}
                  className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                    activeFilter === tab ? 'bg-[#051F20] text-white' : 'bg-[#E8F5EE] text-[#235347]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {filteredRows.map((row) => (
            <div
              key={row.id}
              className="flex items-center gap-4 border-b border-[#8EB69B]/15 px-5 py-4 transition-colors last:border-b-0 hover:bg-[#E8F5EE]/50"
            >
              <div className="flex flex-1 items-center gap-3">
                <ChildAvatar name={row.child.name} size="sm" />
                <div>
                  <div className="text-sm font-semibold text-[#051F20]">{row.child.name}</div>
                  <div className="text-xs text-[#235347]">{row.child.age}</div>
                </div>
              </div>
              <div className="w-32">
                <span className={`rounded-full px-2.5 py-0.5 text-xs ${domainStyles[row.domain]}`}>{row.domain}</span>
              </div>
              <div className="w-40 text-sm text-[#235347]">{row.specialist}</div>
              <div className={`w-24 text-sm ${row.days > 7 ? 'font-semibold text-red-600' : 'text-[#235347]'}`}>
                {row.days} days
              </div>
              <div className="w-28">
                <span className={`rounded-full px-2.5 py-0.5 text-xs ${statusStyles[row.status]}`}>{row.status}</span>
              </div>
              <div className="w-24">
                <button
                  type="button"
                  className="rounded-lg bg-[#051F20] px-3 py-2 text-xs text-white transition-colors hover:bg-[#163832]"
                >
                  Review →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
