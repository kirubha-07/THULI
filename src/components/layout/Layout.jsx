import { useState } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

export default function Layout({ title, breadcrumb, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-mint-50 font-sans">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="md:ml-60 flex flex-1 flex-col overflow-hidden">
        <TopBar title={title} breadcrumb={breadcrumb} onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto p-3 pt-20 sm:p-4 md:p-6 md:pt-20">{children}</main>
      </div>
    </div>
  )
}