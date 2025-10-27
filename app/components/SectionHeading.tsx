export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && <p className="text-slate-300 mt-2 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
