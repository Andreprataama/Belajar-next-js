import { GetStaticProps, InferGetStaticPropsType } from "next";
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

export const getStaticPaths = async () => {
  const notes = await fetch(`https://service.pace11.my.id/api/notes`).then(
    (res) => res.json()
  );
  const paths = notes.data.map((note: NotesData) => ({
    params: { id: note.id.toString() },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps = (async (c) => {
  const { params } = c;
  const res = await fetch(
    `https://service.pace11.my.id/api/note/${params?.id}`
  );
  const notes: Notes = await res.json();
  return { props: { notes }, revalidate: 60 };
}) satisfies GetStaticProps<{ notes: Notes }>;

export default function NotesServerPage({
  notes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(notes);
  return (
    <div className="p-4 bg-white shadow-sm rounded-lg">
      <h1>{notes.data.title}</h1>
      <p>{notes.data.description}</p>
    </div>
  );
}
