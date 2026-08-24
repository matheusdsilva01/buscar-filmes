interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center gap-3">
        <div className="h-8 w-1 rounded-full bg-red-9" />
        <h2 className="text-2xl font-bold text-gray-12">{title}</h2>
      </div>
      {subtitle && <p className="max-w-2xl text-gray-11">{subtitle}</p>}
    </div>
  )
}
