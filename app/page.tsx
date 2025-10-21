import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Home Page</h1>
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/customers">Customers</Link></li>
      </ul>
    </main>
  );
}
