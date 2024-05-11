import Image from "next/image"
import Link from "next/link"

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center lg:flex">
        <Image 
          src="/logo.svg"
          width={35}
          height={35}
          alt="Logo"
        />
        <p className="font-bold text-amber-300 text-3xl ml-2.5">
          Finance
        </p>
      </div>
    </Link>
  )
}