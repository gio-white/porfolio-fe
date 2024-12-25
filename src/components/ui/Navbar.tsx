import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="text-white">
      <div className="container mx-auto flex item-center justify-between p-4">
        <div className="logo">
            <h2>G</h2>
            
        </div>
        <div className="space-x-4 items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/about-me"}>About Me</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
