import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="text-white">
      <div className="mx-auto flex item-center justify-between p-4">
        <div className="w-fit">
            <h2>G</h2>
            
        </div>
        <div className="flex flex-1 justify-center gap-4 space-x-4 items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/about-me"}>About Me</Link>
          <Link href={"/contacts"}>Contacts</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
