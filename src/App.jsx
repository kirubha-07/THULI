import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import ParentPage from './pages/ParentPage'
import GovernmentPage from './pages/GovernmentPage'
import SupervisorDashboard from './pages/SupervisorDashboard'
import WorkerView from './pages/WorkerView'
import ChildProfile from './pages/ChildProfile'
import SectionPage from './pages/SectionPage'
import ReferralsPage from './pages/ReferralsPage'
import AnalyticsPage from './pages/AnalyticsPage'

function AppRoutes() {
  const location = useLocation()

  return (
    <div key={location.pathname} className="page-enter">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/parent" element={<ParentPage />} />
        <Route path="/government" element={<GovernmentPage />} />
        <Route path="/dashboard" element={<SupervisorDashboard />} />
        <Route path="/worker" element={<WorkerView />} />
        <Route path="/child/:id" element={<ChildProfile />} />
        <Route path="/children" element={<SectionPage title="Children" breadcrumb="District Registry · March 2025" section="children" />} />
        <Route path="/workers" element={<SectionPage title="Workers" breadcrumb="Centre Workforce · March 2025" section="workers" />} />
        <Route path="/referrals" element={<ReferralsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/attendance" element={<SectionPage title="Attendance" breadcrumb="Worker Attendance · March 2025" section="attendance" />} />
        <Route path="/reports" element={<SectionPage title="Reports" breadcrumb="Monthly Reporting · March 2025" section="reports" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
