import Image from "next/image";

export default function HeavyComponent() {
  const items = Array.from({ length: 500 }, (_, i) => `Item number ${i + 1}`);

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f0f0f0" }}>
      <h2>Heavy Component</h2>

      <div style={{ marginBottom: "1rem" }}>
        <Image src="/foto.jpg" alt="Foto2" width={1200} height={700} priority />
      </div>

      <ul
        style={{
          height: "300px",
          overflow: "auto",
          backgroundColor: "#fff",
          padding: "1rem",
        }}
      >
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "0.5rem" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
