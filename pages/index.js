import Link from "next/link";






export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">No notes selected</h1>
      <Link href="/notes/New" className="text-blue-500">Click here to create a note</Link>
    </div>
  );
}

