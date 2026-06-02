export default function SectionHeader({ title, eyebrow, action, className = '' }) {
  return (
    <div className={`flex items-start justify-between gap-4 ${className}`.trim()}>
      <div>
        {eyebrow ? <div className="text-xs font-medium text-forest-700">{eyebrow}</div> : null}
        <h2 className="text-base font-semibold text-forest-950">{title}</h2>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}