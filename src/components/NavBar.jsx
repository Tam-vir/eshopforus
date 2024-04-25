import Link from "next/link"
export default function NavBar() {
  return (
    <nav className="flex h-[60px] w-full flex-row items-center justify-between p-4 backdrop-blur  fixed top-0 left-0 bg-[#0c001f] bg-opacity-50">
      <Link href="/">{`EShop`}</Link>
      <div className="flex flex-row items-center justify-between">
        <h1 className="mx-4">Login</h1>
      </div>
    </nav>
  );
}
