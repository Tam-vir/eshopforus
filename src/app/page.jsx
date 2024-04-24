import Image from "next/image";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-14">
      <div className="aspect-w-16 aspect-h-9"></div>
      <NavBar />
    </main>
  );
}
