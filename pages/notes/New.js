import { Textarea, TextInput } from "flowbite-react";
import { useState } from "react";

export default function New({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState("");
  return (
    <div className="w-full">
      <form className="flex flex-col gap-4">
        <div>
          <label className="flex w-full flex-col gap-1">
            <span>Title: </span>
            <input
              name="title"
              className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
          </label>
        </div>
        <div>
          <label className="flex w-full flex-col gap-1">
            <span>ID: </span>
            <input
              name="id"
              className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
              type={"number"}
              onChange={(e) => {
                setId(e.target.value);
              }}
              value={id}
            />
          </label>
        </div>
        <div>
          <label className="flex w-full flex-col gap-1">
            <span>Body: </span>
            <textarea
              name="body"
              rows={8}
              className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
              onChange={(e) => {
                setBody(e.target.value);
              }}
              value={body}
            />
          </label>
        </div>

        <div className="text-right">
          <button
            className="rounded bg-blue-500  py-2 px-4 text-white focus:bg-blue-400 hover:bg-blue-600"
            onClick={() => {
              addNote(id, body, title);
              event.preventDefault();
              setBody("");
              setTitle("");
              setId("");
            }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
