import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black-bright py-5 px-4 mt-6 flex justify-between">
      <Image width={66} height={28} src="/logo-2.svg" alt="logo img footer" />
      <h6 className="text-white hover:underline">
        <Link
          href="https://linktr.ee/Matheusdsilva"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvedor
        </Link>
      </h6>
    </footer>
  );
};

export default Footer;
