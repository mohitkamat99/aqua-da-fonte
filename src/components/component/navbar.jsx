import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#home"
      >
        Home
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#products"
      >
        Products
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#about"
      >
        About Us
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#contact"
      >
        Contact Us
      </Link>
    </nav>
  );
}
