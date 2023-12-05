import stylex from "@stylexjs/stylex";

const s = stylex.create({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    paddingTop: 20,
  },
});

export default function Home() {
  return (
    <main className={stylex(s.main)}>
      <h1>Hello</h1>
    </main>
  );
}
