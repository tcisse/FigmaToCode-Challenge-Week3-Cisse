import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div>
      <header className="hidden lg:block">
        <div className="flex justify-between items-center max-w-7xl mx-auto py-7">
          <div className="font-bold text-3xl">Bandage</div>
          <ul className="flex space-x-10">
            <Link href="/" className="font-semibold cursor-pointer hover:text-primary">
              Home
            </Link>
            <li className="font-semibold cursor-pointer hover:text-primary">
              Product
            </li>
            <li className="font-semibold cursor-pointer hover:text-primary">
              Pricing
            </li>
            <Link href="/contact" className="font-semibold cursor-pointer hover:text-primary">
              Contact
            </Link>
          </ul>
          <div className="flex items-center space-x-10">
            <Link className="text-primary font-semibold" href="/">
              Login
            </Link>
            <button className="flex items-center space-x-4 bg-primary px-4 py-3 text-white font-semibold rounded-lg">
              Become a member
              <Image
                src="/icons/arrow_left.svg"
                width={20}
                height={20}
                alt=""
              />
            </button>
          </div>
        </div>
      </header>
      <header></header>
    </div>
  );
}
