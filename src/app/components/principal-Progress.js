export default function Progress() {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="font-semibold mb-4 text-blue-950">Progress</h3>
      <div className="space-y-4 text-black">
        <div>
          <p>Study</p>
          <div className="bg-gray-200 rounded h-2">
            <div className="bg-blue-500 h-2 rounded" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div>
          <p>Sports</p>
          <div className="bg-gray-200 rounded h-2">
            <div className="bg-blue-800 h-2 rounded" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div>
          <p>Other Activities</p>
          <div className="bg-gray-200 rounded h-2">
            <div className="bg-blue-900 h-2 rounded" style={{ width: '50%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
