'use client'

import { useRouter } from "next/navigation";
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const router = useRouter()
    return (
        <div>
            <nav className="w-full bg-blue-400 fixed top-0 left-0 right-0 z-10 shadow-x1">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <button onClick={() => router.push('/')}>
                                <h2 className="text-2xl text-white font-bold ">LOGO</h2>
                            </button>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <Image src="/close.svg" width={30} height={30} alt="logo" />
                                    ) : (
                                        <Image
                                            src="/menu.svg"
                                            width={30}
                                            height={30}
                                            alt="logo"
                                            className="focus:border-none active:border-none"
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                                    <button onClick={() => router.push('/')}>
                                        Home
                                    </button>
                                </li>
                                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                                    <button onClick={() => router.push('/')}>
                                        Categorias
                                    </button>
                                </li>
                                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                                    <button onClick={() => router.push('/product')}>
                                        Produtos
                                    </button>
                                </li>
                                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                                    <button onClick={() => router.push('/about')}>
                                        Sobre Nós
                                    </button>
                                </li>
                                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                                    <button onClick={() => router.push('/')}>
                                        Contatos
                                    </button>
                                </li>
                                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                                    <button onClick={() => router.push('/cart')}>
                                        <Image
                                            src="/cart.svg"
                                            width={30}
                                            height={30}
                                            alt="cart"
                                            className="focus:border-none active:border-none"
                                        />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}