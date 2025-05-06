const MembersSidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white p-4">
      <h3 className="text-sm font-semibold">TEACHER</h3>
      <ul className="mb-4 mt-2">
        <li className="text-green-400">🟢 Anna Smith</li>
      </ul>
      <h3 className="text-sm font-semibold">STUDENTS</h3>
      <ul className="mt-2 space-y-1">
        <li>⚪ Mark Twin</li>
        <li>⚪ John Whilston</li>
        <li>⚪ Jasmine Gabriella</li>
      </ul>
    </div>
  );
};

export default MembersSidebar;
