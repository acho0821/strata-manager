export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Strata Management Portal</h1>
      <p className="mt-4 text-lg text-gray-700">
        Welcome to the official management portal for our Strata Building.
      </p>
      <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
        Get Started
      </button>
    </main>
  );
}
