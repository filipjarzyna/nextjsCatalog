'use client'
import '@styles/global.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [active, setActive] = useState(0)


    return (
        <>
            {/* mobile menu */}
            <nav className='flex w-full justify-between mb-16 pt-3 items-center select-nonex'>
                <div className='flex md:hidden w-full justify-between items-center'>
                    <div>
                        <Image src='/logo/testlogo.jpg' alt="logo" width={44} height={44} className='rounded-full' />
                    </div>
                    <div className=''>
                        smallnav
                    </div>
                    <div className='w-11'>
                        linki
                    </div>
                </div>

                {/* desktop menu */}
                <div className='hidden md:flex w-full justify-between items-center select-none mx-3'>
                    <div className='w-20'>
                        <Image src='/logo/testlogo.jpg' alt="logo" width={44} height={44} className='rounded-full' />
                    </div>
                    <div className='flex gap-5 text-xl'>
                        <div onClick={() => setActive(0)}>
                            <Link href="/">Strona Glowna</Link>
                        </div>
                        <div onClick={() => setActive(1)}>
                            <Link href="/sklep">Sklep</Link>
                        </div>
                        <div onClick={() => setActive(2)}>
                            <Link href="/kontakt">Kontakt</Link>
                        </div>
                    </div>
                    <div className='w-20'>
                        linki
                    </div>
                </div>
            </nav>
            {/* desktop menu */}
        </>
    )
}

export default Navbar