import { NextResponse } from "next/server";

// Dummy student data (replace this with a database query)
const studentsData = {
  6: [
    { id: 1, name: "Alice", marks: { math: 85, science: 90, english: 78, history: 88 } },
    { id: 2, name: "Bob", marks: { math: 75, science: 85, english: 82, history: 80 } },
  ],
  7: [
    { id: 3, name: "Charlie", marks: { math: 88, science: 92, english: 84, history: 86 } },
    { id: 4, name: "David", marks: { math: 79, science: 87, english: 81, history: 78 } },
  ],
  8: [
    { id: 5, name: "Eve", marks: { math: 90, science: 88, english: 89, history: 92 } },
    { id: 6, name: "Frank", marks: { math: 85, science: 86, english: 83, history: 85 } },
  ],
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const grade = searchParams.get("grade");

  // Get students for the requested grade
  const students = studentsData[grade] || [];

  return NextResponse.json(students);
}
