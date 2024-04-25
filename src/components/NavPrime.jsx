import Link from "next/link";
export default function NavBar({active}) {
  function addLinks(){
    if(active == "products"){
      return(
        <>
          <Link className="mx-4 py-2 px-4 rounded-lg hover:bg-purple-300 duration-300 transition ease-in-out" href="/shops">Shops</Link>
          <span className="h-[30px] w-[1px] bg-purple-500"></span>
          <Link className="mx-4 bg-purple-300 hover:bg-purple-300 duration-300 py-2 px-4 rounded-lg transition ease-in-out" href="/products">All Products</Link>
        </>
      )
    }
    else{
      return(
        <>
          <Link className="mx-4 bg-purple-300 py-2 px-4 rounded-lg hover:bg-purple-300 duration-300 transition ease-in-out" href="/shops">Shops</Link>
          <span className="h-[30px] w-[1px] bg-purple-500"></span>
          <Link className="mx-4 hover:bg-purple-300 duration-300 py-2 px-4 rounded-lg transition ease-in-out" href="/products">All Products</Link>
        </>
      )
    }
  }
  return (
    <div className="w-full h-[60px] bg-gradient-to-r from-purple-700">
      <div className="w-full h-[59px] bg-[#0c001f] flex flex-row items-center text-purple-500 text-lg">
        {addLinks()}
      </div>
    </div>
  );
}
