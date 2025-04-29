import { GetServerSideProps, InferGetServerSidePropsType } from "next";
type NotesData = {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
};

type Notes = {
  data: NotesData;
  message: string;
  meta: { limit: number; page: number; total: number; total_pages: number };
  status: string;
};

export const getServerSideProps = (async (c) => {
  const { params } = c;
  const res = await fetch(
    `https://service.pace11.my.id/api/note/${params?.id}`
  );
  const notes: Notes = await res.json();
  return { props: { notes } };
}) satisfies GetServerSideProps<{ notes: Notes }>;

export default function NotesServerPage({
  notes,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(notes);
  return (
    <div className="p-4 bg-white shadow-sm rounded-lg">
      <h1>{notes.data.title}</h1>
      <p>{notes.data.description}</p>
    </div>
  );
}
