const Button = ({
  children,
  backgroundColor = "bg-blue-600",
  color = "text-white",
}: {
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
}) => {
  return (
    <button
      className={`${backgroundColor} ${color} rounded-lg px-4 py-2 text-white`}
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex flex-col gap-2">
      <Button>Hello world!</Button>

      <Button backgroundColor="bg-red-500">Hello world!</Button>

      <Button backgroundColor="m-10 bg-blue-500">Hello world!</Button>
    </div>
  );
}

export default App;
