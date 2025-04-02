// app/api/students/route.js (Next.js API route)
import { connectToDatabase } from "../../lib/mongodb";

export async function GET(req, res) {
  const { grade } = req.query;
  const db = await connectToDatabase();
  const students = await db
    .collection("students")
    .find({ grade: parseInt(grade) })
    .toArray();

  res.status(200).json(students);
}

export async function POST(req, res) {
  const { name, grade, marks } = req.body;
  const db = await connectToDatabase();
  const result = await db.collection("students").insertOne({
    name,
    grade,
    marks,
  });
  res.status(201).json(result);
}
