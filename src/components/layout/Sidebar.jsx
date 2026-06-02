import { NavLink, useLocation } from 'react-router-dom'
import {
  ArrowRightLeft,
  Baby,
  BarChart2,
  CalendarCheck,
  FileText,
  Home,
  Landmark,
  LayoutDashboard,
  LogOut,
  Sun,
  UserCheck,
  Users,
} from 'lucide-react'

function DropMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <ellipse cx="12" cy="12.5" rx="6.5" ry="8.5" fill="#163832" />
      <ellipse cx="12" cy="13" rx="4.8" ry="6.2" fill="#235347" />
      <ellipse cx="12" cy="13.5" rx="3.2" ry="4.6" fill="#8EB69B" />
      <ellipse cx="12" cy="14" rx="1.8" ry="2.8" fill="#E8F5EE" />
    </svg>
  )
}

const supervisorItems = [
  { label: 'Home / Landing', path: '/', icon: Home },
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Children', path: '/children', icon: Users },
  { label: 'Workers', path: '/workers', icon: UserCheck },
  { label: 'Referrals', path: '/referrals', icon: ArrowRightLeft },
  { label: 'Analytics', path: '/analytics', icon: BarChart2 },
  { label: 'Parent Portal', path: '/parent', icon: Baby },
  { label: 'Govt View', path: '/government', icon: Landmark },
]

const workerItems = [
  { label: 'Home / Landing', path: '/', icon: Home },
  { label: 'Morning Digest', path: '/worker', icon: Sun },
  { label: 'My Children', path: '/children', icon: Baby },
  { label: 'Attendance', path: '/attendance', icon: CalendarCheck },
  { label: 'Reports', path: '/reports', icon: FileText },
  { label: 'Parent Portal', path: '/parent', icon: Baby },
  { label: 'Govt View', path: '/government', icon: Landmark },
]

export default function Sidebar({ open, onClose }) {
  const location = useLocation()
  const savedRole = typeof window !== 'undefined' ? window.sessionStorage.getItem('thuli-role') : null
  const workerRoutes = ['/worker', '/attendance', '/reports']
  const isWorkerView = savedRole === 'worker' || workerRoutes.some((route) => location.pathname === route || location.pathname.startsWith(`${route}/`))
  const navItems = isWorkerView ? workerItems : supervisorItems

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 z-50 h-screen w-60 bg-forest-950 text-white shadow-md transition-transform duration-200 md:translate-x-0 md:transform-none ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex h-full flex-col">
          <div className="p-5">
            <div className="flex items-center gap-3">
              <DropMark />
              <div>
                <div className="text-lg font-semibold leading-none text-white">THULI</div>
                <div className="text-xs text-sage/70">துளி</div>
              </div>
            </div>
          </div>

          <nav className="mt-4 flex-1 overflow-y-auto px-3">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `mb-1 flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm transition-colors ${
                      isActive ? 'bg-forest-800 text-white' : 'text-sage/70 hover:bg-forest-800 hover:text-white'
                    }`
                  }
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </NavLink>
              )
            })}
          </nav>

          <div className="mx-4 my-4 border-t border-forest-800" />

          {isWorkerView ? (
            <div className="px-4">
              <div className="text-xs text-sage/60">Anganwadi Centre 12</div>
              <div className="text-xs text-sage/50">Ukkadam, Coimbatore</div>
            </div>
          ) : null}

          <div className="p-4">
            <div className="flex items-center justify-between gap-3 rounded-xl bg-forest-900/60 p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-700 text-sm font-semibold text-white">M</div>
                <div>
                  <div className="text-sm font-medium text-white">{isWorkerView ? 'Meenakshi R.' : 'District Admin'}</div>
                  <div className="text-xs text-sage/60">{isWorkerView ? 'Anganwadi Worker' : 'Supervisor'}</div>
                </div>
              </div>
              <button type="button" className="text-sage/50 transition-colors hover:text-white" aria-label="Log out">
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}