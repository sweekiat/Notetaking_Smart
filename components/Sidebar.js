import Link from "next/link";






export default function Sidebar({data}) {
  return (
    <div className="flex flex-col h-full bg-gray-50 border-r">
      <Link href="/notes/New" className="block p-4 text-xl  text-blue-500">
        New
      </Link>
      {data.map((note) => (
        <Link href={note.id} className="block border-b p-4 text-xl ">
          {note.title}
        </Link>
      ))}
    </div>
  );
}
