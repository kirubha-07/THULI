import { useEffect, useState } from 'react'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

const accentStyles = {
  green: 'bg-green-50 text-alert-green border-alert-green/20',
  red: 'bg-red-50 text-alert-red border-alert-red/20',
  neutral: 'bg-mint-100 text-forest-700 border-sage/20',
}

export default function StatCard({ value, label, icon: Icon, trend, trendLabel, accent = 'neutral' }) {
  const TrendIcon = trend > 0 ? TrendingUp : trend < 0 ? TrendingDown : Minus
  const [count, setCount] = useState(0)

  useEffect(() => {
    const valueStr = String(value)
    const digitsOnly = valueStr.replace(/\D/g, '')
    if (!digitsOnly) {
      return undefined
    }

    const target = parseInt(digitsOnly, 10)
    const step = target / 90

    setCount(0)
    const interval = setInterval(() => {
      setCount((current) => {
        if (current + step >= target) {
          clearInterval(interval)
          return target
        }
        return current + step
      })
    }, 16)

    return () => clearInterval(interval)
  }, [value])

  const valueStr = String(value)
  const digitsOnly = valueStr.replace(/\D/g, '')
  const suffix = valueStr.replace(/[\d.,]/g, '')
  const hasNumeric = Boolean(digitsOnly)

  return (
    <div className="rounded-lg sm:rounded-xl border border-sage/20 bg-white p-3 sm:p-4 md:p-5 shadow-sm">
      <div className={`flex h-9 w-9 items-center justify-center rounded-full border sm:h-10 sm:w-10 ${accentStyles[accent] ?? accentStyles.neutral}`}>
        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-forest-700" />
      </div>
      <div className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold text-forest-950">
        {hasNumeric ? (
          <>
            {Math.floor(count)}
            {suffix}
          </>
        ) : (
          value
        )}
      </div>
      <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-forest-700">{label}</div>
      <div className="mt-3 sm:mt-4 flex items-center gap-2">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
            accent === 'red' ? 'bg-red-50 text-alert-red' : accent === 'green' ? 'bg-green-50 text-alert-green' : 'bg-mint-100 text-forest-700'
          }`}
        >
          <TrendIcon className="h-3 w-3" />
          {trend > 0 ? `+${trend}` : trend}
        </span>
        <span className="text-xs text-forest-700">{trendLabel}</span>
      </div>
    </div>
  )
}