import NavPrime from "@/components/NavPrime";
import {usePathname} from "next/navigation";
export default function Home() {

const pathname = usePathname()
  return (
    <main className="w-screen h-screen flex flex-col items-center sm:p-14 p-4">
      <br />
      <br />
      <br />
      <NavPrime active={pathname}/>


    </main>
  );
}
