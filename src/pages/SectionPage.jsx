import { useNavigate } from 'react-router-dom'
import { CalendarCheck, FileText } from 'lucide-react'
import Layout from '../components/layout/Layout'
import RiskBadge from '../components/ui/RiskBadge'
import ChildAvatar from '../components/ui/ChildAvatar'
import { children, workers } from '../data/mockData'

const sectionIcons = {
  attendance: CalendarCheck,
  reports: FileText,
}

export default function SectionPage({ title, breadcrumb, section }) {
  const navigate = useNavigate()

  const content = {
    children: {
      headline: 'District child registry',
      intro: 'Browse all children in the current district and jump into a profile from any row.',
      list: children.slice(0, 8),
    },
    workers: {
      headline: 'Worker roster',
      intro: 'View worker coverage, child counts, and supervision scores across the district.',
      list: workers,
    },
    attendance: {
      headline: 'Attendance log',
      intro: 'Track daily worker attendance and centre activity from a single place.',
      list: [],
    },
    reports: {
      headline: 'Reporting desk',
      intro: 'A simple command centre for pending reports, parent letters, and supervisor review.',
      list: [],
    },
  }[section]

  const EmptyIcon = sectionIcons[section]

  return (
    <Layout title={title} breadcrumb={breadcrumb}>
      <div className="space-y-4">
        {section === 'children' || section === 'workers' ? (
          <div className="rounded-xl border border-sage/20 bg-white p-6 shadow-sm">
            <div className="text-2xl font-semibold text-forest-950">{content.headline}</div>
            <div className="mt-1 text-sm text-forest-700">{content.intro}</div>
          </div>
        ) : null}

        {section === 'children' ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.list.map((child) => (
              <button
                key={child.id}
                type="button"
                onClick={() => navigate(`/child/${child.id}`)}
                className="rounded-xl border border-sage/20 bg-white p-4 text-left shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <ChildAvatar name={child.name} />
                  <RiskBadge risk={child.risk} />
                </div>
                <div className="mt-3 text-sm font-semibold text-forest-950">{child.name}</div>
                <div className="text-xs text-forest-700">{child.age}</div>
                <div className="mt-1 text-xs text-forest-700">{child.centre}</div>
              </button>
            ))}
          </div>
        ) : section === 'workers' ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.list.map((worker) => (
              <div key={worker.name} className="rounded-xl border border-sage/20 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-forest-950">{worker.name}</div>
                <div className="text-xs text-forest-700">{worker.centre}</div>
                <div className="mt-4 h-1.5 rounded-full bg-mint-100">
                  <div className="h-1.5 rounded-full bg-forest-700" style={{ width: `${worker.score}%` }} />
                </div>
                <div className="mt-2 text-xs text-forest-700">{worker.children} children · Score {worker.score}</div>
              </div>
            ))}
          </div>
        ) : EmptyIcon ? (
          <div className="mx-auto mt-12 max-w-md rounded-2xl bg-[#E8F5EE] p-16 text-center">
            <EmptyIcon className="mx-auto mb-4 h-12 w-12 text-[#8EB69B]" />
            <div className="text-xl font-bold text-[#051F20]">Coming soon</div>
            <div className="mt-2 text-sm text-[#235347]">This section is under development</div>
          </div>
        ) : null}
      </div>
    </Layout>
  )
}
