import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-green-600 py-20'>
            <div className='flex justify-around items-center text-black'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-2xl font-bold'>This is Dummy Project</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis pariatur autem mollitia?</p>
                </div>
                <div>
                    <ul className='flex flex-col items-center'>
                        <li>
                            <Link href={'#'}>About</Link>
                        </li>
                        <li>
                            <Link href={'#'}>Contact us</Link>
                        </li>
                        <li>
                            <Link href={'#'}>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href={'#'}>Terms Condition</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer