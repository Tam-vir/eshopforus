import Image from "next/image";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-14">
      <div className="width-full aspect-h-9 bg-intro"></div>
      <NavBar />
    </main>
  );
}
