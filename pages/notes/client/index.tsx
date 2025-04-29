import useSWR from "swr";

type NotesData = {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Clientside() {
  const { data, error } = useSWR(
    "https://service.pace11.my.id/api/notes?page=1&limit=5",
    fetcher,
    { refreshInterval: 1000 }
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className="flex flex-col gap-5">
      {data.data.map((item: NotesData) => {
        return (
          <div
            key={item.id}
            className="flex flex-col gap-2 bg-green-800 text-white"
          >
            <span>{item.title}</span>
            <span>{item.description}</span>
          </div>
        );
      })}
    </div>
  );
}
