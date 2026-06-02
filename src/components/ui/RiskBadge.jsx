const riskStyles = {
  red: {
    wrapper: 'bg-red-50 text-alert-red border border-alert-red/30',
    label: 'HIGH RISK',
  },
  yellow: {
    wrapper: 'bg-yellow-50 text-alert-yellow border border-alert-yellow/30',
    label: 'WATCH',
  },
  green: {
    wrapper: 'bg-green-50 text-alert-green border border-alert-green/30',
    label: 'SAFE',
  },
}

export default function RiskBadge({ risk = 'green', size = 'sm', label }) {
  const config = riskStyles[risk] ?? riskStyles.green
  const sizeClasses = size === 'lg' ? 'px-5 py-2 text-sm font-semibold' : 'px-3 py-1 text-xs font-medium'

  const badge = (
    <span className={`inline-flex items-center rounded-full ${sizeClasses} ${config.wrapper}`}>{label ?? config.label}</span>
  )

  if (risk === 'red') {
    return (
      <div className="relative inline-flex items-center justify-center">
        <div className="absolute h-full w-full rounded-full bg-red-400 opacity-60 animate-ping" />
        {badge}
      </div>
    )
  }

  return badge
}