import { useState } from 'react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Check, Circle, Hand, Mic, Sparkles, Users, X } from 'lucide-react'
import Layout from '../components/layout/Layout'

const weightData = [
  { m: 'Jan', w: 8.1 },
  { m: 'Feb', w: 8.4 },
  { m: 'Mar', w: 8.6 },
  { m: 'Apr', w: 8.7 },
  { m: 'May', w: 8.9 },
  { m: 'Jun', w: 9.1 },
]

const milestoneTabs = ['Physical', 'Language', 'Cognitive']

const milestonesByTab = {
  Physical: [
    { text: 'Walks independently', status: 'done' },
    { text: 'Climbs steps with support', status: 'done' },
    { text: 'Runs steadily', status: 'pending' },
  ],
  Language: [
    { text: 'Says 10+ words', status: 'alert' },
    { text: 'Points to named objects', status: 'pending' },
    { text: 'Follows 2-step instructions', status: 'alert' },
  ],
  Cognitive: [
    { text: 'Stacks 3+ blocks', status: 'done' },
    { text: 'Matches shapes', status: 'pending' },
    { text: 'Sorts by colour', status: 'pending' },
  ],
}

const activities = [
  {
    icon: Mic,
    title: 'Talk more together',
    desc: 'Name objects during cooking, bathing, walks. Ask Riya simple questions every day.',
    tag: 'Language',
  },
  {
    icon: Hand,
    title: 'Texture play',
    desc: 'Offer different materials — rough cloth, smooth glass, soft cotton. Builds cognitive awareness.',
    tag: 'Cognitive',
  },
  {
    icon: Users,
    title: 'Neighbour play',
    desc: '30 minutes with another child every evening. Social play is essential at this age.',
    tag: 'Social',
  },
]

const statusConfig = {
  done: {
    icon: Check,
    iconClass: 'text-green-600',
    badge: 'Achieved',
    badgeClass: 'bg-green-50 text-green-700',
  },
  pending: {
    icon: Circle,
    iconClass: 'text-[#8EB69B]',
    badge: 'In progress',
    badgeClass: 'bg-[#E8F5EE] text-[#235347]',
  },
  alert: {
    icon: X,
    iconClass: 'text-red-500',
    badge: 'Needs support',
    badgeClass: 'bg-red-50 text-red-700',
  },
}

export default function ParentPage() {
  const [activeTab, setActiveTab] = useState('Physical')
  const milestones = milestonesByTab[activeTab]

  return (
    <Layout title="Parent Portal" breadcrumb="Riya Kumari · Centre 12, Ukkadam">
      <div className="min-h-full rounded-xl bg-[#E8F5EE] p-4 sm:p-6">
        {/* Section 1 — Page Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-black text-[#051F20]">My Child&apos;s Development</h1>
            <p className="mt-1 text-sm text-[#235347]">Powered by THULI AI · Updated today</p>
          </div>
          <span className="rounded-full bg-[#051F20] px-4 py-2 font-mono text-xs text-white">
            UCID: TN-CBE-2024-0047
          </span>
        </div>

        {/* Section 2 — Child Summary Card */}
        <div className="mb-6 rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#163832] text-xl font-black text-white">
                RK
              </div>
              <div>
                <div className="text-2xl font-black text-[#051F20]">Riya Kumari</div>
                <div className="mt-1 text-sm text-[#235347]">20 months · Centre 12, Ukkadam, Coimbatore</div>
              </div>
            </div>
            <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
              ⚠ Needs Attention
            </span>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-4 border-t border-[#8EB69B]/20 pt-6">
            <div className="rounded-xl border border-green-200 bg-green-50 p-3 text-center">
              <div className="text-xs text-green-700">Physical</div>
              <div className="text-2xl font-black text-green-800">72%</div>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-center">
              <div className="text-xs text-red-700">Language</div>
              <div className="text-2xl font-black text-red-800">28%</div>
            </div>
            <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-3 text-center">
              <div className="text-xs text-yellow-700">Cognitive</div>
              <div className="text-2xl font-black text-yellow-800">61%</div>
            </div>
            <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-3 text-center">
              <div className="text-xs text-yellow-700">Social-Emotional</div>
              <div className="text-2xl font-black text-yellow-800">45%</div>
            </div>
          </div>
        </div>

        {/* Section 3 — Two Column Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Card A — Weight Tracking */}
            <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
              <div className="flex justify-between">
                <div className="text-sm font-semibold text-[#051F20]">Weight tracking</div>
                <div className="text-xs text-[#235347]">Last 6 months</div>
              </div>
              <div className="mt-4 h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weightData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#8EB69B" strokeOpacity={0.3} />
                    <XAxis dataKey="m" tick={{ fontSize: 11, fill: '#235347' }} axisLine={false} tickLine={false} />
                    <YAxis domain={[7.5, 10]} tick={{ fontSize: 11, fill: '#235347' }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        background: '#051F20',
                        border: 'none',
                        borderRadius: 8,
                        color: 'white',
                        fontSize: 12,
                      }}
                    />
                    <Line
                      dataKey="w"
                      stroke="#163832"
                      strokeWidth={2.5}
                      dot={{ fill: '#235347', r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Card B — Milestone Progress */}
            <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
              <div className="mb-4 text-sm font-semibold text-[#051F20]">Milestone progress</div>
              <div className="mb-5 flex gap-2">
                {milestoneTabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                      activeTab === tab ? 'bg-[#051F20] text-white' : 'bg-[#E8F5EE] text-[#235347]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div>
                {milestones.map((item) => {
                  const config = statusConfig[item.status]
                  const StatusIcon = config.icon
                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 border-b border-[#8EB69B]/15 py-2.5 last:border-b-0"
                    >
                      <StatusIcon className={`h-5 w-5 shrink-0 ${config.iconClass}`} />
                      <span className="flex-1 text-sm text-[#051F20]">{item.text}</span>
                      <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${config.badgeClass}`}>
                        {config.badge}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Card C — This Week's Activities */}
            <div className="rounded-2xl border border-[#8EB69B]/30 bg-white p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="text-sm font-semibold text-[#051F20]">This week&apos;s activities</div>
                <div className="flex items-center gap-1 text-xs text-[#8EB69B]">
                  <Sparkles size={12} />
                  From THULI AI
                </div>
              </div>
              <div className="space-y-3">
                {activities.map((activity) => {
                  const Icon = activity.icon
                  return (
                    <div key={activity.title} className="flex gap-4 rounded-xl bg-[#E8F5EE] p-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#163832]">
                        <Icon size={16} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#051F20]">{activity.title}</div>
                        <div className="mt-1 text-xs leading-relaxed text-[#235347]">{activity.desc}</div>
                        <span className="mt-2 inline-block rounded-full border border-[#8EB69B]/40 bg-white px-3 py-1 text-xs text-[#235347]">
                          {activity.tag}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Card D — Latest Worker Note */}
            <div className="rounded-2xl bg-[#051F20] p-6">
              <div className="mb-4 flex items-start justify-between">
                <span className="text-sm font-bold text-white">Meenakshi R.</span>
                <span className="text-xs text-[#8EB69B]">Today · 10:24 AM</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-white">
                Riya was quiet today but made brief eye contact twice during activity time. Language observation logged
                for AI review.
              </p>
              <span className="mt-4 inline-block rounded-full bg-[#235347] px-3 py-1.5 text-xs text-white">
                Language domain
              </span>
            </div>

            {/* Card E — AI Recommendation */}
            <div className="rounded-2xl border border-[#163832]/30 bg-[#E8F5EE] p-6">
              <div className="mb-3 flex items-start gap-3">
                <Sparkles size={20} className="mt-0.5 shrink-0 text-[#235347]" />
                <div className="text-sm font-semibold text-[#051F20]">AI Recommendation</div>
              </div>
              <p className="text-sm leading-relaxed text-[#235347]">
                Based on Riya&apos;s language domain score of 28%, THULI recommends scheduling a speech and language
                assessment.
              </p>
              <p className="mt-2 text-xs text-[#235347]/70">
                Nearest resource: DEIC Coimbatore · 4.2km · Open Mon–Fri
              </p>
              <button
                type="button"
                className="mt-4 rounded-xl bg-[#163832] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#051F20]"
              >
                Get referral details →
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
