import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function DropMark() {
  return (
    <svg viewBox="0 0 220 220" className="mx-auto h-60 w-60" aria-hidden="true">
      <ellipse cx="110" cy="113" rx="74" ry="92" fill="#163832" />
      <ellipse cx="110" cy="116" rx="56" ry="73" fill="#235347" />
      <ellipse cx="110" cy="120" rx="38" ry="52" fill="#8EB69B" />
      <ellipse cx="110" cy="124" rx="20" ry="28" fill="#E8F5EE" />
    </svg>
  )
}

export default function Login() {
  const navigate = useNavigate()
  const [role, setRole] = useState('Supervisor')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    window.sessionStorage.setItem('thuli-role', role === 'Anganwadi Worker' ? 'worker' : 'supervisor')
    navigate(role === 'Supervisor' ? '/dashboard' : '/worker')
  }

  return (
    <div className="flex min-h-screen bg-mint-50 font-sans">
      <section className="flex w-1/2 items-center justify-center bg-forest-950 px-10 py-12 text-center">
        <div>
          <DropMark />
          <div className="mt-2 text-5xl font-semibold text-white">THULI</div>
          <div className="mt-1 text-sm text-sage">துளி</div>
          <div className="mt-2 text-[13px] text-sage/70">AI-Powered Early Childhood Development Platform</div>
        </div>
      </section>

      <section className="flex w-1/2 items-center justify-center px-10 py-12">
        <div className="w-96 rounded-2xl bg-white p-10 shadow-lg">
          <h1 className="text-2xl font-semibold text-forest-950">Welcome back</h1>
          <p className="mt-1 text-sm text-forest-700">Sign in to THULI</p>

          <div className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-forest-700">Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-lg border border-sage/40 p-3 text-sm text-forest-900 outline-none focus:ring-1 focus:ring-forest-700"
                placeholder="name@department.gov.in"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-forest-700">Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-lg border border-sage/40 p-3 text-sm text-forest-900 outline-none focus:ring-1 focus:ring-forest-700"
                placeholder="Enter password"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-forest-700">Role</span>
              <select
                value={role}
                onChange={(event) => setRole(event.target.value)}
                className="w-full rounded-lg border border-sage/40 bg-white p-3 text-sm text-forest-900 outline-none focus:ring-1 focus:ring-forest-700"
              >
                <option>Supervisor</option>
                <option>Anganwadi Worker</option>
              </select>
            </label>

            <button
              type="button"
              onClick={handleLogin}
              className="w-full rounded-lg bg-forest-700 py-3 font-medium text-white hover:bg-forest-800"
            >
              Sign in
            </button>
          </div>

          <div className="mt-6 text-center text-[10px] text-sage/60">v1.0 — Hackathon Demo · Team ZENQ</div>
        </div>
      </section>
    </div>
  )
}