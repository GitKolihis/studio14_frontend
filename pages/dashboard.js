export default function Dashboard() {
  return (
    <>
      <div className="flex">
        <aside className="w-44 fixed left-0 top-0 h-screen bg-slate-700 p-10">
          <h1 className="text-white text-4xl">Sidebar</h1>
        </aside>
        <main className="flex-1 ml-44">
          <div className="h-96 bg-amber-400 p-10">
            <h1 className="text-4xl">Top Content</h1>
          </div>
          <div className="h-96 bg-white p-10">
            <h1 className="text-4xl">Middle Content</h1>
          </div>
          <div className="h-96 bg-green-400 p-10">
            <h1 className="text-4xl">Middle Content</h1>
          </div>
          <div className="h-96 bg-indigo-400 p-10">
            <h1 className="text-4xl">Last Content</h1>
          </div>
        </main>
      </div>
    </>
  );
}
