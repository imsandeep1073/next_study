import Link from 'next/link'
import React from 'react'

const CustomeNavbar = () => {
    return (
        <nav className='flex justify-between py-6 px-20 max-h-screen bg-green-600 text-black '>
            <div>
                <h1 className='font-bold'><Link href={'/'}>Logo</Link ></h1>
            </div>
            <div>
                <ul className='flex space-x-4'>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/add-task'}>Add Task</Link>
                    </li>
                    <li>
                        <Link href={'/show-tasks'}>Show Task</Link>
                    </li>                   
                </ul>
            </div>
            <div>
                <ul className='flex space-x-4'>
                    <li>
                        <Link href={'/'}>Login</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Sign up</Link>
                    </li>                                    
                </ul>
            </div>
        </nav>
    )
}

export default CustomeNavbar