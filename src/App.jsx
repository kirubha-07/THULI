import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SupervisorDashboard from './pages/SupervisorDashboard'
import WorkerView from './pages/WorkerView'
import ChildProfile from './pages/ChildProfile'
import SectionPage from './pages/SectionPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<SupervisorDashboard />} />
        <Route path="/worker" element={<WorkerView />} />
        <Route path="/child/:id" element={<ChildProfile />} />
        <Route path="/children" element={<SectionPage title="Children" breadcrumb="District Registry · March 2025" section="children" />} />
        <Route path="/workers" element={<SectionPage title="Workers" breadcrumb="Centre Workforce · March 2025" section="workers" />} />
        <Route path="/referrals" element={<SectionPage title="Referrals" breadcrumb="Case Follow-up · March 2025" section="referrals" />} />
        <Route path="/analytics" element={<SectionPage title="Analytics" breadcrumb="District Trends · March 2025" section="analytics" />} />
        <Route path="/attendance" element={<SectionPage title="Attendance" breadcrumb="Worker Attendance · March 2025" section="attendance" />} />
        <Route path="/reports" element={<SectionPage title="Reports" breadcrumb="Monthly Reporting · March 2025" section="reports" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}