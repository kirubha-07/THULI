function initialsFromName(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function ChildAvatar({ name, size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-9 w-9 text-sm',
    lg: 'h-12 w-12 text-base',
    xl: 'h-16 w-16 text-2xl',
  }

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full bg-mint-100 font-semibold text-forest-800 ${sizeClasses[size]} ${className}`.trim()}
      aria-label={name}
    >
      {initialsFromName(name)}
    </div>
  )
}