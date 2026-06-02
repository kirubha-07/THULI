import { Bell, Menu, Search, UserCircle2, X } from 'lucide-react'
import { useState } from 'react'

export default function TopBar({ title, breadcrumb, onMenuClick }) {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-20 h-16 border-b border-[#163832]/50 bg-white px-3 shadow-sm sm:px-4 md:left-60 md:px-6">
      <div className="flex h-full items-center justify-between gap-2 sm:gap-3 md:gap-4">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <button
            type="button"
            onClick={onMenuClick}
            className="md:hidden rounded-lg p-2 text-forest-700 hover:bg-mint-100"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-400" aria-hidden="true" />
              <div className="truncate text-lg font-semibold text-forest-950 sm:text-xl">{title}</div>
            </div>
            <div className="hidden text-xs text-forest-700 sm:block">{breadcrumb}</div>
          </div>
        </div>
        
        {/* Desktop search */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-forest-700" />
            <input
              type="text"
              placeholder="Search..."
              className="w-40 rounded-full border border-sage/30 bg-white py-2 pl-9 pr-4 text-sm text-forest-900 outline-none focus:ring-1 focus:ring-forest-700"
            />
          </div>
        </div>

        {/* Mobile search toggle */}
        <div className="md:hidden">
          {!showSearch && (
            <button
              type="button"
              onClick={() => setShowSearch(true)}
              className="rounded-full p-2 text-forest-700 hover:bg-mint-100"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Mobile search input */}
        {showSearch && (
          <div className="absolute left-3 right-14 top-3 md:hidden">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-forest-700" />
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                className="w-full rounded-full border border-sage/30 bg-white py-2 pl-9 pr-4 text-sm text-forest-900 outline-none focus:ring-1 focus:ring-forest-700"
              />
            </div>
          </div>
        )}

        {/* Close search on mobile */}
        {showSearch && (
          <button
            type="button"
            onClick={() => setShowSearch(false)}
            className="md:hidden rounded-full p-2 text-forest-700 hover:bg-mint-100"
            aria-label="Close search"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        {/* Notification and user */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button type="button" className="relative rounded-full p-2 text-forest-700 hover:bg-mint-100">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-alert-red ring-2 ring-white sm:h-2.5 sm:w-2.5" />
            <span className="absolute -right-0.5 top-0.5 rounded-full bg-alert-red px-1 py-0 text-[9px] font-semibold leading-none text-white sm:px-1.5 sm:py-0.5 sm:text-[10px]">3</span>
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-mint-100 text-sm font-semibold text-forest-800 sm:h-9 sm:w-9">
            <UserCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
        </div>
      </div>
    </header>
  )
}