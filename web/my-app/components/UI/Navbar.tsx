import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className='flex text-white justify-between items-center gradient text-lg md:text-xl lg:text-2xl'>
            <Link href='/'>
                <figure className="ml-6 relative h-12 w-32 md:h-16 lg:w-40 lg:h-24 cursor-pointer">
                    <Image src="/image/Logo_Tapology-removebg.png" layout='fill' objectFit='cover' alt="Logo" />
                </figure>
            </Link>
            <div className='flex'>
                <div>
                    <Link href='/blog'>
                        <a className='hover:bg-blue-400 px-5 py-3 md:px-7 md:py-5 lg:px-10 lg:py-8 block border-x-2'>
                            Blog
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href='/shop'>
                        <a className='hover:bg-blue-400 px-5 py-3 md:px-7 md:py-5 lg:px-10 lg:py-8 block'>
                            Shop
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;