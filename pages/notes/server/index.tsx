import { GetServerSideProps } from "next";
import Link from "next/link";

type NotesData = {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
};

type Notes = {
  data: NotesData[];
  message: string;
  meta: { limit: number; page: number; total: number; total_pages: number };
  status: string;
};

export const getServerSideProps = (async () => {
  const res = await fetch(
    "https://service.pace11.my.id/api/notes?page=1&limit=5"
  );
  const notes: Notes = await res.json();
  return { props: { notes } };
}) satisfies GetServerSideProps<{ notes: Notes }>;

export default function Notes({ notes }: { notes: Notes }) {
  console.log(notes);
  return (
    <div className="flex flex-col gap-5">
      {notes.data.map((item: NotesData) => {
        return (
          <Link
            href={`/notes/server/${item.id}`}
            key={item.id}
            className="flex flex-col gap-2 bg-green-800 text-white"
          >
            <span>{item.title}</span>
            <span>{item.description}</span>
          </Link>
        );
      })}
    </div>
  );
}
