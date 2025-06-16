export default function StatsCard({ label, count, icon, color }) {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-lg shadow-md bg-white border-l-4 text-black ${color}`}>
      {icon}
      <div>
        <h3 className="text-sm font-semibold">{label}</h3>
        <p className="text-xl font-bold">{count}</p>
      </div>
    </div>
  );
}
