import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center bg-[#e27c60] px-7 py-2 font-bold shadow-xl">
      <div className="mr-auto ">
        <Link href="/">
          <a>
            {" "}
            <img
              src="/images/profile.jpg"
              className=" max-h-10 rounded-full"
            ></img>
          </a>
        </Link>
      </div>
      <div className="mr-6">
        <Link href="/">
          <a>ABOUT</a>
        </Link>
      </div>
      <div>
        <Link href="/blogs">
          <a>BLOG</a>
        </Link>
      </div>
    </nav>
  );
}
