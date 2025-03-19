import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4 text-white">
        <ul className="flex space-x-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/owners">Owners</Link></li>
          <li><Link href="/committee">Committee</Link></li>
          <li><Link href="/funds">Funds</Link></li>
          <li><Link href="/reports">Reports</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}
