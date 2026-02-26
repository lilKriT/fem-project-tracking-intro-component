import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="z-10 fixed top-0 w-full flex justify-center items-center">
      <div className="max-w-7xl w-full flex justify-between items-center mx-8 mt-16">
        {/* Logo */}
        <Image
          src={"/logo.svg"}
          alt="Our Logo"
          width={32}
          height={32}
          className="h-10 w-auto"
        />

        {/* Navigation */}
        <nav>
          <ul className="flex justify-center items-center gap-8">
            <li>
              <Link href={"/#"} className="navLink">
                Product
              </Link>
            </li>

            <li>
              <Link href={"/#"} className="navLink">
                Features
              </Link>
            </li>

            <li>
              <Link href={"/#"} className="navLink">
                Pricing
              </Link>
            </li>

            <li>
              <div className="rounded-full bg-gray-300 w-2 aspect-square mt-1"></div>
            </li>

            <li>
              <Link href={"/#"} className="navLink navLink--faded">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
